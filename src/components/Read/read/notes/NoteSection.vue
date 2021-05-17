<template>
  <AnkiModal
    v-if="ankiModal"
    :notes="notes"
    :indexOfAnkiCards="indexOfAnkiCards"
    :media_path="media_path"
    @successfullSync="successfullSync"
    @unsuccessfullSync="ankiModal = false"
  />
  <div id="container">
    <ul>
      <li
        v-for="(note, index) in notes"
        :key="index"
        :class="$store.getters.getMarkdownDarkMode ? 'darkmode' : 'lightmode'"
        @click="edit($refs['plain' + index], index)"
      >
        <div class="options">
          <div class="ascii-anki cloze" @click="addCloze(index)">{...}</div>
          <div
            class="ascii-anki select-for-anki"
            :ref="'ankisymb' + index"
            @click="toAnkiCard($event, index)"
          >
            ★
          </div>
          <div @click="del($event, index)" class="x" ref="delete">&times;</div>
        </div>
        <textarea
          class="note-plain hidden"
          :ref="'plain' + index"
          @keydown="handleText($event, index)"
          @input="resize($refs['plain' + index], index)"
          @paste="pasteImage($event, index)"
          tabindex="0"
          spellcheck="false"
          :class="$store.getters.getMarkdownDarkMode ? 'darkmode' : 'lightmode'"
          v-model="notes[index]"
          rows="1"
        >
        </textarea>
        <div class="note-md md" :ref="'md' + index">
          {{ note }}
        </div>
      </li>
    </ul>
    <transition name="slide-fade" mode="out-in">
      <div id="md-button-container" v-if="item">
        <div
          class="md-button upload-container"
          v-if="$store.getters.getIsZoomedIn"
          @click="upload"
        >
          <Icons
            class="upload"
            icon="back"
            width="30px"
            height="30px"
            color="black"
          />
        </div>
        <div
          class="md-button download-container"
          v-if="$store.getters.getIsZoomedIn"
          @click="download"
        >
          <Icons
            class="download"
            icon="back"
            width="30px"
            height="30px"
            color="black"
          />
        </div>
        <div
          class="md-button anki-sync"
          v-if="$store.getters.getIsZoomedIn"
          @click="ankiModal = true"
        >
          <Icons icon="anki" width="30px" height="30px" color="black" />
        </div>
        <div
          class="md-button gallery"
          v-if="$store.getters.getIsZoomedIn"
          @click="openMediaFolder"
        >
          <Icons icon="gallery" width="30px" height="30px" color="black" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { read, write } from "../../../../filemanager";
import { constants } from "../../../../constants";
import { createMDObj, cleanTextForMarkdown } from "../../../../filemanager";
import renderMathInElement from "../../../../../node_modules/katex/contrib/auto-render/auto-render";
import Icons from "../../../Icons";
import AnkiModal from "./modals/AnkiModal";
import tippy from "tippy.js";
const { shell } = window.require("electron");
const { dialog } = window.require("electron").remote;
const path = window.require("path");
const fs = window.require("fs");

export default {
  name: "NoteSection",
  props: ["item"],
  components: {
    Icons,
    AnkiModal,
  },
  data: function () {
    return {
      notes: [],
      indexOfAnkiCards: new Set(),
      MDObj: null,
      activeElement: null,
      path: "",
      media_path: "",
      ankiModal: false,
    };
  },
  methods: {
    openMD(path) {
      let noteMD = read(path);
      this.notes = noteMD.split(constants.NOTES_SPLIT_STRING);

      this.$nextTick(() => {
        Array.from(document.getElementsByClassName("md")).forEach((el) => {
          this.render(el);
        });
        this.edit(
          this.$refs["plain" + (this.notes.length - 1)],
          this.notes.length - 1
        );
        this.resize(
          this.$refs["plain" + (this.notes.length - 1)],
          this.notes.length - 1
        );
      });
    },
    edit(el, index) {
      if (this.activeElement) this.activeElement.classList.remove("show");
      el.classList.add("show");
      el.focus();
      this.activeElement = el;
      this.resize(el, index);
    },
    loseEditFocus() {
      if (this.activeElement && document.activeElement !== this.activeElement) {
        this.activeElement.classList.remove("show");
        this.activeElement = null;
      }
    },
    handleText(e, index) {
      e.stopPropagation();
      if (e.shiftKey && e.key === "Enter") {
        e.preventDefault();
        let isLastAndEmpty =
          index === this.notes.length - 1 &&
          this.$refs["plain" + index].value === "";
        if (!isLastAndEmpty) {
          if (index === this.notes.length - 1) this.notes.push("");
          this.$nextTick(() => {
            this.edit(this.$refs["plain" + (index + 1)], index + 1);
          });
        }
      } else if (e.key == "Tab") {
        e.preventDefault();
        let textarea = this.$refs["plain" + index];
        document.execCommand("insertText", false, "\t");
        this.notes[index] = textarea.value;
        this.$nextTick(() => this.resize(this.$refs["plain" + index], index));
      } else if (e.ctrlKey && e.shiftKey && e.key === "C") {
        this.addCloze(index);
      }
    },
    resize(el, index) {
      el.style.height = "";
      el.style.height = el.scrollHeight + "px";
      this.render(this.$refs["md" + index]);
    },
    render(el) {
      renderMathInElement(el, {
        delimiters: this.$store.getters.getNoteMathDelimiters,
        throwOnError: false,
      });
      let text = cleanTextForMarkdown(el.innerHTML);
      text = this.MDit.render(text);
      text = text.replace(/{{c\d+::(.*?)}}/gims, "$1");
      el.innerHTML = text.replace(/&lt;\/span&gt;/gi, "\\");
    },
    del(e, index) {
      e.stopPropagation();
      this.notes.splice(index, 1);

      for (let i = 0; i <= index; i++) {
        this.render(this.$refs["md" + i]);
      }

      if (this.notes.length === 0) {
        this.notes.push("");
        this.$nextTick(() => {
          this.resize(this.$refs["plain" + 0], 0);
        });
      }

      if (this.indexOfAnkiCards.has(index)) {
        this.indexOfAnkiCards.delete(index);
      }
    },
    async pasteImage(e, index) {
      if (
        e.clipboardData.files[0] &&
        constants.ALLOWED_IMAGES.includes(e.clipboardData.files[0].type)
      ) {
        let file = e.clipboardData.files[0];
        const buffer = Buffer.from(await file.arrayBuffer());
        let imageName =
          this.item.name +
          this.item.mediaCount +
          "." +
          file.name.split(".").slice(-1);
        write(this.media_path + "/" + imageName, buffer);
        let itemLocal = this.item;
        itemLocal.mediaCount++;
        this.$store.dispatch("updateItemFromQueue", itemLocal);

        let mdImage = `![](${imageName})`;
        let textarea = this.$refs["plain" + index];
        textarea.focus();
        document.execCommand("insertText", false, mdImage);
        this.notes[index] = textarea.value;

        this.$nextTick(() => this.resize(textarea, index));
      }
    },
    addCloze(index) {
      let textarea = this.$refs["plain" + index];
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      let newText = `{{c1::${textarea.value.substring(start, end)}}}`;
      textarea.focus();
      document.execCommand("insertText", false, newText);
      this.notes[index] = textarea.value;

      this.$nextTick(() => this.resize(textarea, index));
    },
    openMediaFolder() {
      shell.openPath(this.media_path);
    },
    download() {
      let save_path = dialog.showSaveDialogSync();
      if (save_path) {
        let noteMD = this.notes.join(constants.NOTES_SPLIT_STRING);
        save_path =
          save_path
            .substring(save_path.length - 3, save_path.length)
            .toLowerCase() === ".md"
            ? save_path
            : save_path + ".md";
        write(save_path, noteMD);
        fs.readdirSync(this.media_path).forEach((file) => {
          fs.copyFile(
            path.join(this.media_path, file),
            path.join(path.dirname(save_path), file),
            (err) => {
              if (err) console.log(err);
            }
          );
        });
      }
    },
    upload() {
      let path = dialog.showOpenDialogSync({
        properties: ["openFile"],
        filters: [{ name: "Markdown", extensions: ["md"] }],
      });
      if (path) {
        this.openMD(path[0]);
      }
    },
    toAnkiCard(e, index) {
      e.stopPropagation();
      if (!this.indexOfAnkiCards.has(index)) {
        this.indexOfAnkiCards.add(index);
        this.$refs["ankisymb" + index].classList.add("ankisymb-active");
      } else {
        this.indexOfAnkiCards.delete(index);
        this.$refs["ankisymb" + index].classList.remove("ankisymb-active");
      }
    },
    successfullSync() {
      this.indexOfAnkiCards.forEach((index) =>
        this.$refs["ankisymb" + index].classList.remove("ankisymb-active")
      );
      this.indexOfAnkiCards = new Set();
      this.ankiModal = false;
    },
    initTippy() {
      tippy(".select-for-anki", {
        content: "Select for Anki sync",
      });
      tippy(".cloze", {
        content: "Add a cloze deletion",
      });
      tippy(".gallery", {
        content: "Open media files for Markdown",
      });
      tippy(".anki-sync", {
        content: "Sync selected cards with Anki",
      });
      tippy(".download-container", {
        content: "Save Notes",
      });
      tippy(".upload-container", {
        content: "Upload a Markdown file",
      });
    },
  },
  mounted: function () {
    if (this.item) {
      if (constants.LOCAL_MEDIA_FILES.includes(this.item.fileType))
        this.path = this.item.dir.substring(8);
      else this.path = this.item.dir;

      const { md, media_path } = createMDObj(this.item.ID);
      this.MDit = md;
      this.media_path = media_path;

      this.openMD(this.path + "/" + "notes.md");

      document.addEventListener("click", this.loseEditFocus);

      this.$nextTick(() => {
        this.initTippy();
      });
    }
  },
  beforeUnmount: function () {
    if (this.item) {
      let noteMD = this.notes.join(constants.NOTES_SPLIT_STRING);
      write(this.path + "/" + "notes.md", noteMD);

      document.removeEventListener("click", this.loseEditFocus);
    }
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
::-webkit-scrollbar-track {
  background: white;
  border-radius: 10px;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  width: 95%;
  margin-left: 2.5%;
  position: relative;
}
li:not(:last-child) {
  margin-bottom: 15px;
}
.note-plain {
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  border-bottom: 1px solid;
  resize: none;
  box-sizing: content-box;
  font-family: serif;
  overflow: hidden;
  font-size: 16px;
  display: inline-block;
  vertical-align: center;
  padding-top: 20px;
}
.note-md {
  width: 100%;
  display: block;
  overflow-x: auto;
  min-height: 50px;
  overflow-y: hidden;
}
.hidden {
  display: none;
}
.show {
  display: block;
}
.darkmode {
  background-color: #0a0a12;
  color: white;
  border-color: white;
}
.lightmode {
  background-color: white;
  color: black;
  border-color: black;
}
.options {
  position: absolute;
  right: 5px;
  font-size: 24px;
  color: rgba(128, 128, 128, 0.664);
  display: flex;
}
.options div:hover {
  color: rgb(228, 228, 228);
  cursor: pointer;
}
.ankisymb-active {
  color: rgb(228, 228, 228);
}
#md-button-container {
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 300px;
  pointer-events: none;
}
#md-button-container div {
  pointer-events: auto;
}
.md-button {
  background-color: #63adf2b9;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: -0.5rem 0 1rem #000;
  height: 30px;
  width: 30px;
  transition: transform 0.1s ease-in;
}
.md-button:hover {
  transform: translateY(-5px);
}
.upload {
  transform: rotate(90deg);
}
.download {
  transform: rotate(-90deg);
}
.ascii-anki {
  font-size: 18px;
  margin-right: 5px;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
.x {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
</style>
