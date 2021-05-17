<template>
  <div id="dropzone">
    <transition name="fade" mode="out-in">
      <div v-if="!activateIllegalFileDialogue" id="dropzone-active">
        <input
          id="dashed-par"
          ref="input"
          type="file"
          @change="readFile"
          @dragend.prevent
          @dragenter="borderDark"
          @dragleave="borderLight"
          @drop="drop"
        /><label
          ref="drag"
          for="dashed-par"
          id="dashed"
          @dragover.prevent
          @dragend.prevent
          @dragenter="borderDark"
          @dragleave="borderLight"
          @drop="drop"
          @mousedown="borderDark"
          @mouseup="borderLight"
          ><p id="label-text">Click here or drag'n'drop to add to Library</p>
        </label>
      </div>
      <div id="error" v-else><p>The given filetype is not supported</p></div>
    </transition>
    <AddFileDialogue
      v-if="activateDialogue"
      :path="path"
      :fileType="fileType"
      @return="activateDialogue = false"
    />
  </div>
</template>

<script>
import AddFileDialogue from "./AddFileDialogue/AddFileDialogue";
import { isAllowedFile } from "../../../filemanager";

export default {
  name: "Dropzone",
  components: {
    AddFileDialogue,
  },
  data: function () {
    return {
      activateDialogue: false,
      activateIllegalFileDialogue: false,
      path: null,
      fileType: null,
    };
  },
  methods: {
    readFile: function () {
      if (this.$refs.input.files) {
        let path = this.$refs.input.files[0].path;
        let [fileType] = path.split(".").slice(-1);

        if (isAllowedFile(fileType)) {
          this.path = path;
          this.fileType = fileType;
          this.activateDialogue = true;
        } else {
          this.activateDialoguefn();
        }
      }
    },
    drop: function (e) {
      this.borderLight(e);

      // If this.path is === "" the last e.dataTransfer action didn't work

      this.path = e.dataTransfer.getData("text/uri-list");
      this.fileType = this.path === "" ? "" : "url";

      if (this.path.substring(0, 8) === "file:///") {
        this.path = e.dataTransfer.getData("text/uri-list").substring(8);
        [this.fileType] = this.path.split(".").slice(-1);
      }

      if (this.path === "") {
        this.path = e.dataTransfer.getData("text/html");
        this.fileType = this.path === "" ? "" : "html";
      }

      if (this.path === "") {
        if (e.dataTransfer.files[0] !== undefined) {
          let path = e.dataTransfer.files[0].path;
          let [fileType] = path.split(".").slice(-1);

          if (isAllowedFile(fileType)) {
            this.path = path;
            this.fileType = fileType;
          }
        }
      }

      this.activateDialogue = this.path !== "" && this.fileType !== "";
      this.activateIllegalFileDialogue = !this.activateDialogue;

      if (this.activateIllegalFileDialogue) {
        this.activateDialoguefn();
      }
    },
    activateDialoguefn() {
      this.activateIllegalFileDialogue = true;
      setTimeout(() => {
        this.activateIllegalFileDialogue = false;
      }, 2000);
    },
    borderDark: function (e) {
      e.stopPropagation();
      e.preventDefault();
      this.$refs.drag.style.border = "2px dashed black";
    },
    borderLight: function (e) {
      e.stopPropagation();
      e.preventDefault();
      this.$refs.drag.style.border = "2px dashed rgb(180, 180, 180)";
    },
  },
  mounted: function () {
    this.$refs.input.onclick = function () {
      this.value = null;
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#dropzone {
  margin-left: 30%;
  margin-right: 30%;
  height: 30vh;
  width: 40%;
  background: #17141d;
  border-radius: 10px;
}
#dashed-par {
  display: none;
}
#dashed {
  cursor: pointer;
  border: 2px dashed rgb(180, 180, 180);
  background-color: white;
  margin-left: 10%;
  margin-top: 5vh;
  height: 20vh;
  width: 80%;
  display: inline-block;
  transition: border 0.2s ease;
  border-radius: 10px;
  outline: none;
}
#label-text {
  margin-top: 40px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  text-align: center;
  font-size: 22px;
}
#error {
  height: 100%;
  text-align: center;
  display: grid;
  justify-content: center;
  color: white;
  font-size: 22px;
  align-content: center;
}
</style>
