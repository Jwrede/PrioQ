<template>
  <p>Timer Intervals</p>
  <div id="timer-list-container">
    <ul>
      <li v-for="(interval, index) in timerIntervals" :key="index" :id="index">
        {{ interval }} Minutes
        <div id="delete" class="item" @click="deleteInterval(index)">
          <Icons icon="trash" height="22px" width="22px" color="red" />
        </div>
      </li>
    </ul>
  </div>
  <Icons
    id="add"
    icon="plus"
    color="green"
    height="25px"
    width="25px"
    @click="openModalfn"
  />
  <TimerIntervalsModal
    v-if="openModal"
    @closeModal="closeModalfn"
    @addTimerInterval="addTimerInterval"
  />
</template>

<script>
import Icons from "../../Icons";
import TimerIntervalsModal from "./Modals/TimerIntervalsModal";

export default {
  name: "TimerIntervals",
  components: {
    Icons,
    TimerIntervalsModal,
  },
  props: ["type"],
  data: function () {
    return {
      timerIntervals: this.$store.getters.getTimerIntervals,
      openModal: false,
    };
  },
  methods: {
    deleteInterval(index) {
      this.timerIntervals = this.timerIntervals.filter((e, i) => i !== index);
      this.$store.commit("changeTimerIntervals", this.timerIntervals);
    },
    addTimerInterval(interval) {
      this.timerIntervals.push(interval);
      this.$store.commit("changeTimerIntervals", this.timerIntervals);
    },
    openModalfn() {
      this.openModal = true;
    },
    closeModalfn() {
      this.openModal = false;
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #17141d;
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
  background: white;
}
#timer-list-container {
  height: 50%;
  width: 100%;
  overflow: auto;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-align: left;
}
li {
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding: 20px;
}
li + li {
  border-top: 1px solid white;
}
.icons {
  margin-left: 10px;
}
#delete {
  display: grid;
  justify-content: center;
}
#delete:hover,
#add:hover {
  cursor: pointer;
}
.item {
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
</style>