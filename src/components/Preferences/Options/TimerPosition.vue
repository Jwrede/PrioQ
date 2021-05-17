<template>
  <p>Timer Position</p>
  <div id="timer-position">
    <div id="mini-nav">
      <div class="nav-item"></div>
      <div class="nav-item"></div>
      <div class="nav-item"></div>
      <div class="nav-item active"></div>
    </div>
    <div id="mini-main">
      <div id="mini-grid">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
      <div class="mini-timer-top-left timer-position mini-timer"></div>
      <div class="mini-timer-top-mid timer-position mini-timer"></div>
      <div class="mini-timer-top-right timer-position mini-timer"></div>
      <div class="mini-timer-bot-left timer-position mini-timer"></div>
      <div class="mini-timer-bot-mid timer-position mini-timer"></div>
      <div class="mini-timer-bot-right timer-position mini-timer"></div>
      <div id="mini-timer-selected" :class="timerPosition"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerPosition",
  data: function () {
    return {
      timerPosition: "mini-timer-" + this.$store.getters.getTimerPosition,
    };
  },
  mounted: function () {
    document.getElementById("mini-main").addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains("timer-position")) {
        this.timerPosition = e.target.classList[0];

        this.$store.commit(
          "changeTimerPosition",
          this.timerPosition.substring(11)
        );
      }
    });
  },
};
</script>

<style scoped>
#timer-position {
  background-color: #24242e;
  height: 60%;
  width: 60%;
  margin-top: 30px;
  margin-left: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#mini-nav {
  height: 100%;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
}
#mini-main {
  height: 100%;
  width: 100%;
  position: relative;
}
#mini-grid {
  width: 90%;
  height: 100px;
  margin-left: 5%;
  margin-top: 1vh;
  position: absolute;
  display: grid;
  gap: 3px;
  grid-template-areas:
    "a b c"
    "h i d"
    "g f e";

  grid-template-rows: 5.5vh 3vh 5.5vh;
  grid-template-columns: 33% 33% 33%;
}
.card:nth-child(1) {
  grid-area: a;
  animation-delay: calc(1 * var(--stagger-delay));
}
.card:nth-child(2) {
  grid-area: b;
  animation-delay: calc(2 * var(--stagger-delay));
}
.card:nth-child(3) {
  grid-area: c;
  animation-delay: calc(3 * var(--stagger-delay));
}
.card:nth-child(4) {
  grid-area: d;
  animation-delay: calc(4 * var(--stagger-delay));
}
.card:nth-child(5) {
  grid-area: e;
  animation-delay: calc(5 * var(--stagger-delay));
}
.card:nth-child(6) {
  grid-area: f;
  animation-delay: calc(6 * var(--stagger-delay));
}
.card:nth-child(7) {
  grid-area: g;
  animation-delay: calc(7 * var(--stagger-delay));
}
.card:nth-child(8) {
  grid-area: h;
  animation-delay: calc(8 * var(--stagger-delay));
}
.card:nth-child(9) {
  grid-area: i;
  animation-delay: calc(9 * var(--stagger-delay));
}

.card {
  background-color: #17141d;
  border-radius: 3px;
  box-shadow: -1.5px 0 2px #000;
  animation: cardEntrance 300ms ease-out;
  animation-fill-mode: backwards;
}
.mini-timer {
  height: 10px;
  width: 35px;
  position: absolute;
  background-color: #63adf21c;
}
#mini-timer-selected {
  position: absolute;
  height: 10px;
  width: 35px;
  background-color: #63adf2a4;
}
.mini-timer:hover {
  background-color: #63adf234;
  cursor: pointer;
}
.mini-timer-top-left {
  left: 0;
  border-radius: 0 0 3px 3px;
}
.mini-timer-top-mid {
  left: calc(50% - (35px / 2));
  border-radius: 0 0 3px 3px;
}
.mini-timer-top-right {
  right: 0;
  border-radius: 0 0 3px 3px;
}
.mini-timer-bot-left {
  bottom: 0;
  left: 0;
  border-radius: 3px 3px 0 0;
}
.mini-timer-bot-mid {
  bottom: 0;
  left: calc(50% - (35px / 2));
  border-radius: 3px 3px 0 0;
}
.mini-timer-bot-right {
  bottom: 0;
  right: 0;
  border-radius: 3px 3px 0 0;
}
.nav-item {
  background-color: #0a0a12;
  width: 100%;
  flex: 1;
}
.nav-item:not(.active):hover {
  background-color: #121220;
  cursor: pointer;
}
.active {
  background-color: #352d69;
  cursor: pointer;
}
@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: scale(0.3);
    filter: hue-rotate(180deg);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: hue-rotate(0deg);
  }
}
</style>