<template>
  <div id="main">
    <div id="files" class="resizing" :ref="mode + 'file'">
      <FileViewer :mode="mode" :item="item" :key="item ? item.ID : ''" />
    </div>
    <div id="notes" class="resizing" :ref="mode + 'notes'">
      <NoteSection
        :item="item ? item : ''"
        :key="item ? item.ID + 'notes' : ''"
      />
    </div>
    <transition name="slide-fade" mode="out-in">
      <div
        id="queue-control"
        :class="'queue-control-' + $store.getters.getTimerPosition"
        v-if="!$store.getters.getHideTimer && $store.getters.getIsZoomedIn"
      >
        <QueueControl @backToMenu="backToMenu" :mode="mode" :item="item" />
      </div>
    </transition>
  </div>
</template>

<script>
import FileViewer from "./viewer/FileViewer.vue";
import NoteSection from "./notes/NoteSection.vue";
import QueueControl from "./QueueControl.vue";
import Split from "split.js";

export default {
  name: "Read",
  props: ["mode"],
  components: {
    FileViewer,
    NoteSection,
    QueueControl,
  },
  computed: {
    item() {
      return this.mode === "priority"
        ? this.$store.getters.getHighestPriorityItem
        : this.$store.getters.getNextIntervalItem;
    },
  },
  mounted: function () {
    Split([this.$refs[this.mode + "file"], this.$refs[this.mode + "notes"]], {
      sizes: [50, 50],
      minSize: [200, 200],
    });
    Array.from(document.getElementsByClassName("gutter")).forEach((gutter) => {
      gutter.style =
        "width: 5px; height: 100%; cursor: col-resize; background-color: #0a0a12;";
    });
  },
  methods: {
    backToMenu: function () {
      this.$emit("backToMenu");
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: transform ease-out;
}

.slide-fade-leave-active {
  transition: transform ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(60px);
  opacity: 0;
}
#main {
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: #24242e;
  height: 100vh;
  width: 100%;
}
#files {
  width: 100%;
  height: 94vh;
  margin-top: 2vh;
}
#notes {
  width: 100%;
  height: 94vh;
  margin-top: 2vh;
}
#queue-control {
  position: absolute;
  z-index: 2147483647;
  height: 40px;
  width: 200px;
  transition: 0.2s ease-out;
  overflow: hidden;
  background-color: #63adf2b9;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: -0.5rem 0 1rem #000;
}
.queue-control-top-mid {
  left: calc(100% / 2 - 100px);
  top: 50px;
  border-radius: 0 0 100% 100%;
}
.queue-control-top-left {
  left: 50px;
  top: 50px;
  border-radius: 0 0 100% 100%;
}
.queue-control-top-right {
  right: 50px;
  top: 50px;
  border-radius: 0 0 100% 100%;
}
.queue-control-bot-mid {
  left: calc(100% / 2 - 100px);
  top: calc(100vh - 50px - 40px);
  border-radius: 100% 100% 0 0;
}
.queue-control-bot-left {
  left: 50px;
  top: calc(100vh - 50px - 40px);
  border-radius: 100% 100% 0 0;
}
.queue-control-bot-right {
  right: 50px;
  bottom: 50px;
  border-radius: 100% 100% 0 0;
}
</style>
