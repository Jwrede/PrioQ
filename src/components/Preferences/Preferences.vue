<template>
  <div id="container">
    <div id="preferences">
      <div class="card">
        <MaxPrio />
      </div>
      <div class="card">
        <TimerPosition />
      </div>
      <div class="card">
        <QueueRandomness />
      </div>
      <div class="card">
        <CheckmarkOptions
          title="Markdown Darkmode"
          action="changeMarkdownDarkMode"
          :initial="$store.getters.getMarkdownDarkMode"
        />
      </div>
      <div class="card">
        <MathDelimiters type="Markdown" />
      </div>
      <div class="card">
        <MathDelimiters type="Notes" />
      </div>
      <div class="card">
        <TimerIntervals />
      </div>
      <div class="card">
        <CheckmarkOptions
          title="Allow Webbrowsing"
          action="changeAllowBrowsing"
          :initial="$store.getters.getAllowBrowsing"
        />
      </div>
      <div class="card">
        <CheckmarkOptions
          title="HTML Editable"
          action="changeHTMLContenteditable"
          :initial="$store.getters.getHTMLContenteditable"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TimerPosition from "./Options/TimerPosition";
import MathDelimiters from "./Options/MathDelimiters";
import CheckmarkOptions from "./Options/CheckmarkOptions";
import TimerIntervals from "./Options/TimerIntervals";
import QueueRandomness from "./Options/QueueRandomness";
import MaxPrio from "./Options/MaxPrio";
import { storeSettings } from "../../filemanager";

export default {
  name: "Preferences",
  components: {
    TimerPosition,
    MathDelimiters,
    CheckmarkOptions,
    TimerIntervals,
    QueueRandomness,
    MaxPrio,
  },
  beforeUnmount: function () {
    storeSettings();
  },
};
</script>

<style scoped>
#container {
  height: 100vh;
  width: 100%;
}

#preferences {
  height: 90vh;
  width: 90%;
  margin-left: 5%;
  margin-top: 5vh;
  color: white;
  display: grid;
  gap: 2rem;
  grid-template-areas:
    "a b c"
    "h i d"
    "g f e";

  grid-template-rows: 33% 20% 33%;
  grid-template-columns: 31% 31% 31%;

  --stagger-delay: 50ms;
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
  border-radius: 10px;
  box-shadow: -1.5rem 0 2rem #000;
  animation: cardEntrance 300ms ease-out;
  animation-fill-mode: backwards;
  text-align: center;
  font-size: 22px;
  overflow: hidden;
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
