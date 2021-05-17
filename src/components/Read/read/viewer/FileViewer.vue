<template>
  <div id="container">
    <div v-if="isUrl" id="url-container">
      <URLViewer :mode="mode" :item="item" />
    </div>
    <div v-else-if="isPdf" id="pdf-container">
      <PDFViewer :mode="mode" :item="item" />
    </div>
    <div v-else-if="isMdHtml" id="md-html-container">
      <MDHTML :mode="mode" :item="item" />
    </div>
    <div v-else-if="isMedia" id="video-container">
      <Media :mode="mode" :item="item" />
    </div>
    <div v-else id="error" @click="openLibrary()">
      <p>Click here to add a file</p>
    </div>
  </div>
</template>

<script>
import MDHTML from "./filetypes/MDHTML";
import Media from "./filetypes/Media";
import URLViewer from "./filetypes/URLViewer";
import PDFViewer from "./filetypes/PDFViewer";
import { constants } from "../../../../constants";

export default {
  name: "FileViewer",
  props: ["mode", "item"],
  components: {
    Media,
    MDHTML,
    URLViewer,
    PDFViewer,
  },
  methods: {
    openLibrary() {
      if (this.$store.getters.getIsZoomedIn) {
        this.$store.commit("changeTab", "library");
      }
    },
  },
  computed: {
    isUrl() {
      return this.item && this.item.fileType === "url";
    },
    isPdf() {
      return this.item && this.item.fileType === "pdf";
    },
    isMdHtml() {
      return (
        this.item &&
        (this.item.fileType === "md" || this.item.fileType === "html")
      );
    },
    isMedia() {
      return (
        this.item && constants.LOCAL_MEDIA_FILES.includes(this.item.fileType)
      );
    },
  },
};
</script>

<style scoped>
#container {
  height: 100%;
  overflow: hidden;
  width: 100%;
}
#url-container,
#pdf-container,
#md-html-container,
#video-container {
  height: 100%;
}
#video-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#error {
  height: 90vh;
  width: 100%;
  display: grid;
  align-content: center;
  color: white;
  font-size: 22px;
  cursor: pointer;
  text-align: center;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: white;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::-webkit-scrollbar-corner {
  background: rgba(255, 255, 255, 0);
}
</style>
