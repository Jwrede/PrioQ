<template>
  <div id="main">
    <div :id="paused ? 'button-play' : 'button-stop'" @click="start_stop"></div>
    <div id="timer-text" v-html="formatedCounter"></div>
    <div id="button-skip" @click="skipTime"></div>
  </div>
</template>

<script>
const sound = window.require("sound-play");
const path = window.require("path");
const { remote } = window.require("electron");

export default {
  name: "Timer",
  methods: {
    start_stop() {
      if (this.paused) {
        this.interval = setInterval(() => {
          if (this.counter > 0) {
            this.counter = this.counter - 1;
          } else {
            this.$store.dispatch(
              "timeReached",
              this.$store.getters.getTimerIntervals[this.intervalIndex]
            );
            sound.play(path.join(remote.app.getAppPath(), "notify.mp3"));
            this.next_interval();
          }
        }, 1000);
        this.paused = false;
      } else {
        this.stop_interval();
      }
    },
    next_interval() {
      // if last interval get first, else get next
      this.intervalIndex =
        this.$store.getters.getTimerIntervals.length - 1 <= this.intervalIndex
          ? 0
          : this.intervalIndex + 1;
      let timeInMin = this.$store.getters.getTimerIntervals[this.intervalIndex];
      this.counter = this.convertToSec(timeInMin);
      this.stop_interval();
    },
    stop_interval() {
      clearInterval(this.interval);
      this.paused = true;
    },
    skipTime() {
      let remainingTime = Math.floor(this.counter / 60);
      this.next_interval();
      this.$store.dispatch("timeSkipped", remainingTime);
    },
    convertToSec(min) {
      return min <= 999 ? min * 60 : 999 * 60;
    },
    handleKey(e) {
      this.keysPressed[e.key] = true;
      if (!this.keysPressed["Control"]) {
        if (e.key === " " && e.key) {
          this.start_stop();
          this.spacePressed++;
        }
        if (e.key === " " && this.spacePressed > 1) {
          this.skipTime();
        }
        setTimeout(() => {
          this.spacePressed = 0;
        }, 250);
      }
    },
  },
  data: function () {
    return {
      intervalIndex: 0,
      counter: 0,
      paused: true,
      interval: null,
      spacePressed: 0,
      keysPressed: {},
    };
  },
  computed: {
    formatedCounter: function () {
      let minutes = Math.floor(this.counter / 60);
      let seconds = this.counter % 60;
      let seconds_string = seconds < 10 ? "0" + seconds : "" + seconds;
      return "" + minutes + ":" + seconds_string;
    },
  },
  mounted: function () {
    document.addEventListener("keydown", this.handleKey);
    document.addEventListener("keyup", (e) => delete this.keysPressed[e.key]);
    this.$nextTick(
      () =>
        (this.counter = this.convertToSec(
          this.$store.getters.getTimerIntervals[0]
        ))
    );
  },
  beforeUnmount: function () {
    document.removeEventListener("keydown", this.handleKey);
  },
};
</script>

<style lang="scss" scoped>
$background: #63adf2b9;
#main {
  background: $background;
  height: 100%;
  width: 100%;
  color: #fff;
  justify-content: left;
  font-size: 30px;
}
#timer-text {
  position: absolute;
  margin-left: 100px;
  margin-top: 10px;

  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
#button-play,
#button-stop {
  cursor: pointer;
  margin-top: 11px;
  margin-left: 50px;
  transition: 100ms all ease;
  will-change: border-width;
  border-color: transparent transparent transparent #202020;
}
#button-stop {
  height: 30px;

  border-style: double;
  border-width: 0px 0 0px 30px;
}
#button-play {
  height: 0px;

  border-style: solid;
  border-width: 15px 0 15px 28px;
}
#button-skip {
  position: absolute;
  cursor: pointer;
  margin-top: 12px;
  margin-left: 230px;
  border-right: 10px solid;
  border-bottom: 10px solid;
  height: 15px;
  width: 15px;
  transform: rotate(-45deg);
  border-color: #202020;
}
</style>
