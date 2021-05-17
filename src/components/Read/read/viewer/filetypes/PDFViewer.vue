<template>
  <iframe :id="mode + 'pdf-interface'" class="pdf-interface"></iframe>
</template>

<script>
import path from "path";
const remote = window.require("electron").remote;

export default {
  name: "PDFViewer",
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
    const iframe = document.getElementById(this.mode + "pdf-interface");
    iframe.src = path.join(
      remote.app.getPath("userData"),
      `pdfjs/web/viewer.html?file=${this.getPath}`
    );
  },
  beforeUnmount: function () {
    this.$store.dispatch("updateItemFromQueue", this.itemLocal);
  },
};
</script>

<style scoped>
.pdf-interface {
  height: 100%;
  width: 100%;
  border: none;
}
</style>
