<template>
  <div>
    <div id="back-forward">
      <div class="back-forward" @click="back">
        <Icons icon="back" color="white" height="30px" width="30px" />
      </div>
      <div class="back-forward" @click="forward">
        <Icons icon="forward" color="white" height="30px" width="30px" />
      </div>
    </div>
    <webview id="url-interface" :src="getSrc" :preload="preload"></webview>
  </div>
</template>

<script>
import Icons from "../../../../Icons";
import path from "path";
const { remote } = window.require("electron");
import { read, write } from "../../../../../filemanager";

export default {
  name: "URLViewer",
  props: ["mode", "item"],
  components: {
    Icons,
  },
  computed: {
    getSrc: function () {
      return read(this.getPath);
    },
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
  methods: {
    back: function () {
      this.webview.goBack();
    },
    forward: function () {
      this.webview.goForward();
    },
  },
  data: function () {
    return {
      webview: null,
      itemLocal: this.item,
      preload: path.join(remote.app.getAppPath(), "preload.js"),
      position: [0, 0],
    };
  },
  mounted: function () {
    this.webview = document.getElementById("url-interface");
    this.webview.addEventListener("dom-ready", () => {
      this.webview.insertCSS(
        "::-webkit-scrollbar-track {background: white ;border-radius: 10px;}::-webkit-scrollbar {width: 10px; height: 10px;} ::-webkit-scrollbar-thumb {background: #888;border-radius: 10px;} ::-webkit-scrollbar-thumb:hover {background: #555;}"
      );
      this.webview.executeJavaScript(
        `scrollToPosition(${this.itemLocal.position[1]}, ${this.itemLocal.position[0]}, '${this.getSrc}');`
      );
      this.webview.executeJavaScript("addMouseNavigation()");
      this.webview.executeJavaScript("isUrl()");
      if (!this.$store.getters.getAllowBrowsing)
        this.webview.executeJavaScript("permitNavigation()");

      this.webview.addEventListener("ipc-message", (event) => {
        this.position = event.channel.split(",").map((str) => parseInt(str));
      });
    });
  },
  beforeUnmount: function () {
    if (this.$store.getters.getAllowBrowsing)
      write(this.getPath, this.webview.getURL());
    this.itemLocal.position = this.position;
    this.$store.dispatch("updateItemFromQueue", this.itemLocal);
  },
};
</script>

<style scoped>
#url-interface {
  height: 100%;
  width: 100%;
  border: none;
}
#back-forward {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #0a0a12;
}
.back-forward {
  width: 50%;
  display: flex;
  justify-content: center;
}
.back-forward:hover {
  background-color: #352d69;
  cursor: pointer;
}
</style>
