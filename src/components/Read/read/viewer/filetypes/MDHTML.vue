<template>
  <div :id="mode + 'container-HTMLMD'" class="container-HTMLMD">
    <div :id="mode + 'MD'" class="MD" v-if="itemLocal.fileType === 'md'"></div>
    <div
      :id="mode + 'HTML'"
      class="HTML lightmode"
      @keydown.stop
      spellcheck="false"
      :contenteditable="$store.getters.getHTMLContenteditable"
      v-else
    ></div>
  </div>
</template>

<script>
import { read, write } from "../../../../../filemanager";

export default {
  name: "MDHTML",
  props: ["mode", "item"],
  computed: {
    getPath: function () {
      return (
        this.itemLocal.dir +
        "/" +
        this.itemLocal.ID +
        "." +
        this.itemLocal.fileType
      );
    },
  },
  data: function () {
    return {
      itemLocal: this.item,
    };
  },
  mounted: function () {
    let container = document.getElementById(this.mode + "container-HTMLMD");

    if (this.itemLocal.fileType === "md") {
      let div = document.getElementById(this.mode + "MD");
      div.innerHTML = read(this.getPath);
      container.classList.add(
        this.$store.getters.getMarkdownDarkMode ? "darkmode" : "lightmode"
      );
    } else {
      let div = document.getElementById(this.mode + "HTML");
      div.innerHTML = read(this.getPath);
      let children = Array.from(div.getElementsByTagName("*"));
      children.forEach((e) => {
        if (e.style.position === "fixed") {
          e.style.position = "absolute";
        }
        if (e.hasAttribute("href")) {
          e.removeAttribute("href");
        }
        if (e.tagName === "BUTTON") {
          e.type = "button";
        }
      });
    }
    container.scrollTop = this.itemLocal.position[0];
    container.scrollLeft = this.itemLocal.position[1];
  },
  beforeUnmount: function () {
    if (
      this.itemLocal.fileType === "html" &&
      this.$store.getters.getHTMLContenteditable
    ) {
      write(
        this.getPath,
        document.getElementById(this.mode + "HTML").innerHTML
      );
    }
    let container = document.getElementById(this.mode + "container-HTMLMD");
    this.itemLocal.position = [container.scrollTop, container.scrollLeft];
    this.$store.dispatch("updateItemFromQueue", this.itemLocal);
  },
};
</script>

<style>
.container-HTMLMD {
  overflow: auto;
  height: 100%;
  width: 100%;
}
.HTML,
.MD {
  padding: 10px;
  max-width: 100%;
  position: relative;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
code {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid #f36d33;
  color: #666;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
}
.darkmode {
  background-color: #0a0a12;
  color: rgb(255, 255, 255);
}
.lightmode {
  background-color: white;
  color: black;
}
</style>
