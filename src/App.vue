<template>
  <div
    id="main"
    :class="
      $store.getters.getActiveTab === 'read' ? 'background-read' : 'background'
    "
  >
    <div id="nav" class="nav">
      <NavBar />
    </div>
    <div id="content">
      <DragRegion />
      <div id="main-window" v-if="$store.getters.getIsRunning">
        <Stats v-if="$store.getters.getActiveTab === 'stats'" />
        <Read v-else-if="$store.getters.getActiveTab === 'read'" />
        <Library v-else-if="$store.getters.getActiveTab === 'library'" />
        <Preferences
          v-else-if="$store.getters.getActiveTab === 'preferences'"
        />
      </div>
    </div>
    <transition name="toggle-timer">
      <div
        id="timer"
        v-if="!$store.getters.getHideTimer"
        :class="'timer-' + $store.getters.getTimerPosition"
      >
        <Timer />
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Stats from "./components/Stats/Stats";
import Read from "./components/Read/QueueSelectionScreen";
import Library from "./components/Library/Library";
import Preferences from "./components/Preferences/Preferences";
import Timer from "./components/Timer";
import DragRegion from "./components/DragRegion";
import { constants } from "./constants";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  name: "App",
  components: {
    NavBar,
    Stats,
    Read,
    Library,
    Preferences,
    Timer,
    DragRegion,
  },
  data: function () {
    return {
      keysPressed: {},
    };
  },
  methods: {
    handleShortcuts(e) {
      this.keysPressed[e.key] = true;

      if (this.keysPressed["Control"]) {
        if (["1", "2", "3", "4"].includes(e.key)) {
          let key = parseInt(e.key);
          this.$store.commit("changeTab", constants.ALLOWED_TABS[key - 1]);
        } else if (e.key === " ") {
          this.$store.commit("toggleTimer");
        }
      }
    },
  },
  mounted() {
    this.$store.dispatch("init");
    document.addEventListener("keydown", this.handleShortcuts);
    document.addEventListener("keyup", (e) => delete this.keysPressed[e.key]);

    tippy.setDefaultProps({ delay: [400, null] });
  },
};
</script>

<style lang="scss">
@import "./assets/video-js.css";
@import "./assets/vjs-matrix.css";
@import "../node_modules/katex/dist/katex.min.css";

html,
body {
  height: 100vh;
  width: 100%;
  margin: 0;
  overflow: hidden;
  font-family: Helvetica, sans-serif;
}
#main {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.background {
  background-color: #24242e;
}
.background-read {
  background-color: #0a0a12;
}
#nav {
  width: 75px;
  height: 100vh;
}
#content {
  height: 100vh;
  width: calc(100% - 75px);
}
#timer {
  position: absolute;
  z-index: 2147483647;
  height: 50px;
  width: 300px;
  transition: 0.2s ease-out;
  overflow: hidden;
  -webkit-app-region: no-drag;
  box-shadow: -0.5rem 0 1rem #000;
}
.timer-top-mid {
  left: calc((100% - 75px) / 2 + 75px - 300px / 2);
  top: 0;
  border-radius: 0 0 10px 10px;
}
.timer-top-left {
  left: 75px;
  top: 0;
  border-radius: 0 0 10px 10px;
}
.timer-top-right {
  left: calc(100vw - 300px);
  top: 0;
  border-radius: 0 0 10px 10px;
}
.timer-bot-mid {
  left: calc((100% - 75px) / 2 + 75px - 300px / 2);
  top: calc(100vh - 50px);
  border-radius: 10px 10px 0 0;
}
.timer-bot-left {
  left: 75px;
  top: calc(100vh - 50px);
  border-radius: 10px 10px 0 0;
}
.timer-bot-right {
  left: calc(100vw - 300px);
  top: calc(100vh - 50px);
  border-radius: 10px 10px 0 0;
}
p {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
.toggle-timer-enter-active {
  transition: transform ease-out;
}
.toggle-timer-leave-active {
  transition: transform ease-in;
}
.toggle-timer-enter-from,
.toggle-timer-leave-to {
  transform: translateY(60px);
  opacity: 0;
}
</style>
