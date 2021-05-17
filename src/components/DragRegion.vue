<template>
  <div id="drag-region">
    <a id="exit" @click="close">&times;</a>
    <a id="minimize" @click="minimize">_</a>
    <a id="help" @click="help"><b>?</b></a>
  </div>
  <HelpModal v-if="openHelpModal" @closeModal="openHelpModal = false" />
</template>

<script>
import { storeSettings } from "../filemanager";
import HelpModal from "./HelpModal";
const remote = window.require("electron").remote;

export default {
  name: "DragRegion",
  components: {
    HelpModal,
  },
  data: function () {
    return {
      openHelpModal: false,
    };
  },
  methods: {
    close() {
      this.$store.commit("closeApp");
      storeSettings();
      this.$nextTick(() => remote.app.quit());
    },
    minimize() {
      remote.BrowserWindow.getFocusedWindow().minimize();
    },
    help() {
      this.openHelpModal = true;
    },
  },
};
</script>

<style scoped>
#drag-region {
  position: absolute;
  left: 75px;
  top: 0;
  height: 2vh;
  width: calc(100% - 75px);
  -webkit-app-region: drag;
  z-index: 10;
}
#exit,
#minimize,
#help {
  position: relative;
  float: right;
  color: grey;
  transition: color 0.1s;
  user-select: none; /* Likely future */
  cursor: pointer;
  font-size: 40px;
  -webkit-app-region: no-drag;
}
#exit {
  margin-right: 20px;
}
#minimize {
  margin-top: -14px;
  margin-right: 15px;
}
#help {
  margin-top: 6px;
  margin-right: 15px;
  font-size: 25px;
}
#exit:hover,
#minimize:hover,
#help:hover {
  color: white;
}
</style>