<template>
  <p>Priority Queue Randomness</p>
  <div id="lower">
    <p>
      {{ $store.getters.getPriorityRandomnessInterval.min }} to
      {{ $store.getters.getPriorityRandomnessInterval.max }}
    </p>
    <div id="sliders" @mouseover="hoverStart" @mouseleave="hoverEnd">
      <input
        ref="sliderMin"
        type="range"
        class="slider slider-without-handle"
        @mouseover="hover"
        @mouseleave="hover"
        @input="changeMin"
        :min="-$store.getters.getMaxPrio"
        :max="$store.getters.getMaxPrio"
        :value="$store.getters.getPriorityRandomnessInterval.min"
        id="min"
      />
      <input
        ref="sliderMax"
        type="range"
        class="slider slider-with-handle"
        @mouseover="hover"
        @mouseleave="hover"
        @input="changeMax"
        :min="-$store.getters.getMaxPrio"
        :max="$store.getters.getMaxPrio"
        :value="$store.getters.getPriorityRandomnessInterval.max"
        id="max"
      />
    </div>
  </div>
</template>

<script>
import tippy from "tippy.js";

export default {
  name: "QueueRandomness",
  data: function () {
    return {
      min: this.$store.getters.getPriorityRandomnessInterval.min,
      max: this.$store.getters.getPriorityRandomnessInterval.max,
    };
  },
  methods: {
    hover() {
      this.$refs.sliderMin.classList.toggle("active-slider");
      this.$refs.sliderMax.classList.toggle("active-slider");
    },
    changeMin(e) {
      let newMin = parseInt(e.target.value);
      if (newMin > this.$store.getters.getPriorityRandomnessInterval.max) {
        e.target.value = this.$store.getters.getPriorityRandomnessInterval.max;
      } else {
        this.$store.commit("changePriorityRandomnessInterval", {
          min: newMin,
          max: this.$store.getters.getPriorityRandomnessInterval.max,
        });
      }

      this.handleOverlap();
    },
    changeMax(e) {
      let newMax = parseInt(e.target.value);
      if (newMax < this.$store.getters.getPriorityRandomnessInterval.min) {
        e.target.value = this.$store.getters.getPriorityRandomnessInterval.min;
      } else {
        this.$store.commit("changePriorityRandomnessInterval", {
          min: this.$store.getters.getPriorityRandomnessInterval.min,
          max: newMax,
        });
      }

      this.handleOverlap();
    },
    handleOverlap() {
      let minEqMax =
        this.$store.getters.getPriorityRandomnessInterval.min ===
        this.$store.getters.getPriorityRandomnessInterval.max;
      let maxEqMaxPrio =
        this.$store.getters.getPriorityRandomnessInterval.max ===
        this.$store.getters.getMaxPrio;

      if (minEqMax && maxEqMaxPrio) {
        document.getElementById("max").classList.add("no-focus");
      } else {
        document.getElementById("max").classList.remove("no-focus");
      }
    },
    initTippy() {
      tippy(".slider", {
        content: "Changes the amount of randomness added to the priority",
      });
    },
  },
  mounted: function () {
    this.$nextTick(() => {
      this.initTippy();
    });
  },
};
</script>

<style scoped>
.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 9px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 40px;
  border-radius: 5px;
}
.no-focus {
  z-index: -1;
}
.slider-with-handle {
  background: rgb(163, 152, 152);
  outline: none;
  transition: 0.2s;
}
.slider-with-handle,
.slider-without-handle {
  pointer-events: none;
}
.slider-without-handle::-webkit-slider-thumb,
.slider-with-handle::-webkit-slider-thumb {
  pointer-events: auto;
}
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgb(163, 152, 152);
  cursor: pointer;
  transition: 0.2s;
}
.active-slider {
  background: white;
}
.active-slider::-webkit-slider-thumb {
  background: white;
}
#lower {
  margin-top: 6.5vh;
}
#sliders {
  height: 59%;
  width: 100%;
  position: relative;
}
</style>