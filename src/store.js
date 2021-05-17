import { createStore } from "vuex";
import { compareDsc } from "./library";
import {
  createStatsObj,
  getAverage,
  getAllSavedDates,
  getStats,
  writeStats,
  fillDatesUpTo,
  dateToPath,
} from "./statsmanager";
import {
  getLibraryFromMemory,
  addToQueue,
  removeFromQueue,
  writeLibraryToMemory,
  equals,
} from "./library";
import { loadSettings } from "./filemanager";

const STATS_RESOLVER = {
  totalTime: 0,
  timeSkipped: 1,
  itemsAdded: 2,
  itemsRemoved: 3,
  itemsSeen: 4,
  itemsFinished: 5,
};

export const store = createStore({
  state() {
    return {
      isRunning: true,
      activeTab: "library",
      timerPosition: "bot-mid",
      library: [],
      timerIntervals: [25, 5],
      currDate: null,
      maxPrio: 20,
      HTMLContenteditable: true,
      stats: createStatsObj(0, 0, 0, 0, 0, 0),
      statsAverage: createStatsObj(0, 0, 0, 0, 0, 0),
      statsWeeklyAverage: createStatsObj(0, 0, 0, 0, 0, 0),
      statsMonthlyAverage: createStatsObj(0, 0, 0, 0, 0, 0),
      statsYearlyAverage: createStatsObj(0, 0, 0, 0, 0, 0),
      allowBrowsing: true,
      activeReadTab: "main",
      intervalIndex: 0,
      isZoomedIn: false,
      modi: ["Priority Mode", "Interval Mode", "Mixed Mode"],
      markdownDarkMode: true,
      markdownMathDelimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      noteMathDelimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      priorityRandomnessInterval: {
        min: -1,
        max: 1,
      },
      hideTimer: false,
    };
  },
  mutations: {
    changeTab(state, newTab) {
      state.activeTab = newTab;
    },
    changeCurrDate(state, date) {
      state.currDate = date;
    },
    changeStats(state, stats) {
      state.stats = stats;
    },
    resetStats(state) {
      for (let category in state.stats) {
        state.stats[category].val = 0;
      }
    },
    changeLibrary(state, library) {
      state.library = library;
    },
    changeStatsAverage(state, statsAverage) {
      state.statsAverage = statsAverage;
    },
    changeStatsWeeklyAverage(state, statsWeeklyAverage) {
      state.statsWeeklyAverage = statsWeeklyAverage;
    },
    changeStatsMonthlyAverage(state, statsMonthlyAverage) {
      state.statsMonthlyAverage = statsMonthlyAverage;
    },
    changeStatsYearlyAverage(state, statsYearlyAverage) {
      state.statsYearlyAverage = statsYearlyAverage;
    },
    incrementStat(state, payload) {
      let statIndex = STATS_RESOLVER[payload.stat];
      state.stats[statIndex].val += payload.incrementVal;
    },
    changeLibraryAt(state, payload) {
      state.library[payload.index] = payload.item;
    },
    changeMarkdownDarkMode(state, bool) {
      state.markdownDarkMode = bool;
    },
    changeMarkdownMathDelimiters(state, delimiters) {
      state.markdownMathDelimiters = delimiters;
    },
    changeNoteMathDelimiters(state, delimiters) {
      state.noteMathDelimiters = delimiters;
    },
    changeTimerPosition(state, position) {
      state.timerPosition = position;
    },
    changeHTMLContenteditable(state, bool) {
      state.HTMLContenteditable = bool;
    },
    changeAllowBrowsing(state, bool) {
      state.allowBrowsing = bool;
    },
    changeActiveReadTab(state, tab) {
      state.activeReadTab = tab;
    },
    changeIsZoomedIn(state, bool) {
      state.isZoomedIn = bool;
    },
    changePriorityRandomnessInterval(state, interval) {
      state.priorityRandomnessInterval = interval;
    },
    changeIntervalIndex(state, index) {
      state.intervalIndex = index;
    },
    changeTimerIntervals(state, newIntervals) {
      state.timerIntervals = newIntervals;
    },
    changeMaxPrio(state, prio) {
      state.maxPrio = prio;
    },
    closeApp(state) {
      state.isRunning = false;
    },
    toggleTimer(state) {
      state.hideTimer = !state.hideTimer;
    },
  },
  getters: {
    getActiveTab(state) {
      return state.activeTab;
    },
    getTimerIntervals(state) {
      return state.timerIntervals;
    },
    getLibrary(state) {
      return state.library;
    },
    getTimerPosition(state) {
      return state.timerPosition;
    },
    getCurrDate(state) {
      return state.currDate;
    },
    getStats(state) {
      return state.stats;
    },
    getStatsAverage(state) {
      return state.statsAverage;
    },
    getStatsWeeklyAverage(state) {
      return state.statsWeeklyAverage;
    },
    getStatsMonthlyAverage(state) {
      return state.statsMonthlyAverage;
    },
    getStatsYearlyAverage(state) {
      return state.statsYearlyAverage;
    },
    getHighestPriorityItem(state, getters) {
      return getters.getPriorityQueue[0];
    },
    getHTMLContenteditable(state) {
      return state.HTMLContenteditable;
    },
    getMaxPrio(state) {
      return state.maxPrio;
    },
    getPermitBrowsing(state) {
      return state.permitBrowsing;
    },
    getMarkdownDarkMode(state) {
      return state.markdownDarkMode;
    },
    getMarkdownMathDelimiters(state) {
      return state.markdownMathDelimiters;
    },
    getNoteMathDelimiters(state) {
      return state.noteMathDelimiters;
    },
    getAllowBrowsing(state) {
      return state.allowBrowsing;
    },
    getModi(state) {
      return state.modi;
    },
    getPriorityQueue(state) {
      return state.library
        .filter((e) => e.mode !== 1 && !e.finished)
        .sort(compareDsc);
    },
    getIntervalQueue(state) {
      return state.library.filter(
        (e) =>
          e.interval[new Date().getDay() - 1] && e.mode !== 0 && !e.finished
      );
    },
    getNextIntervalItem(state, getters) {
      let intervalQueue = getters.getIntervalQueue;
      intervalQueue = intervalQueue.sort((a, b) =>
        new Date(a.added_on).getTime() > new Date(b.added_on).getTime() ? 1 : -1
      );
      let item = null;
      if (
        intervalQueue.length > 0 &&
        state.intervalIndex < intervalQueue.length
      ) {
        item = intervalQueue[state.intervalIndex];
      } else if (
        intervalQueue.length > 0 &&
        state.intervalIndex >= intervalQueue.length
      ) {
        state.intervalIndex = 0;
        item = intervalQueue[0];
      }
      return item;
    },
    getActiveReadTab(state) {
      return state.activeReadTab;
    },
    getIsZoomedIn(state) {
      return state.isZoomedIn;
    },
    getPriorityRandomnessInterval(state) {
      return state.priorityRandomnessInterval;
    },
    getIsRunning(state) {
      return state.isRunning;
    },
    getHideTimer(state) {
      return state.hideTimer;
    },
  },
  actions: {
    async init({ commit }) {
      let library = getLibraryFromMemory();

      commit("changeLibrary", library);

      let date = dateToPath(new Date());
      commit("changeCurrDate", date);

      let stats = getStats(date);
      commit("changeStats", stats);
      writeStats(stats, date);

      let dates = await getAllSavedDates();
      dates = fillDatesUpTo(dates);

      getAverage(
        (statsAverage) => commit("changeStatsAverage", statsAverage),
        dates,
        "total"
      );
      getAverage(
        (statsWeeklyAverage) =>
          commit("changeStatsWeeklyAverage", statsWeeklyAverage),
        dates,
        "week"
      );
      getAverage(
        (statsMonthlyAverage) =>
          commit("changeStatsMonthlyAverage", statsMonthlyAverage),
        dates,
        "month"
      );
      getAverage(
        (statsYearlyAverage) =>
          commit("changeStatsYearlyAverage", statsYearlyAverage),
        dates,
        "year"
      );

      loadSettings();
    },
    _checkIfNextDay({ state, commit }, currDate) {
      if (currDate !== state.currDate) {
        commit("resetStats");
        state.intervalIndex = 0;
        commit("changeCurrDate", currDate);
        writeStats(state.stats, currDate);
      }
    },
    addItem({ commit, state, dispatch }, item) {
      let newQueue = addToQueue(state.library, item);
      commit("changeLibrary", newQueue);

      let currDate = dateToPath(new Date());
      dispatch("_checkIfNextDay", currDate);

      commit("incrementStat", {
        stat: "itemsAdded",
        incrementVal: 1,
      });
      writeStats(state.stats, currDate);
    },
    removeItem({ state, commit, dispatch }, item) {
      let newQueue = removeFromQueue(state.library, item);
      commit("changeLibrary", newQueue);

      let currDate = dateToPath(new Date());
      dispatch("_checkIfNextDay", currDate);

      commit("incrementStat", {
        stat: "itemsRemoved",
        incrementVal: 1,
      });
      writeStats(state.stats, currDate);
    },
    timeReached({ state, commit, dispatch }, time) {
      let currDate = dateToPath(new Date());
      dispatch("_checkIfNextDay", currDate);

      commit("incrementStat", {
        stat: "totalTime",
        incrementVal: parseInt(time),
      });
      writeStats(state.stats, currDate);
    },
    timeSkipped({ state, commit, dispatch }, time) {
      let currDate = dateToPath(new Date());
      dispatch("_checkIfNextDay", currDate);

      commit("incrementStat", {
        stat: "timeSkipped",
        incrementVal: parseInt(time),
      });
      writeStats(state.stats, currDate);
    },
    seenItem({ state, commit, dispatch }, item) {
      item.times_seen++;
      dispatch("updateItemFromQueue", item);

      let currDate = dateToPath(new Date());
      dispatch("_checkIfNextDay", currDate);

      commit("incrementStat", {
        stat: "itemsSeen",
        incrementVal: 1,
      });
      writeStats(state.stats, currDate);
    },
    finishItem({ state, commit, dispatch }, item) {
      item.finished = true;
      dispatch("updateItemFromQueue", item);

      if (this.mode === "interval") dispatch("increaseIntervalIndex");

      let currDate = dateToPath(new Date());
      dispatch("_checkIfNextDay", currDate);

      commit("incrementStat", {
        stat: "itemsFinished",
        incrementVal: 1,
      });
      writeStats(state.stats, currDate);
    },
    updateItemFromQueue({ state, commit }, item) {
      let queue = state.library;
      let itemIndex = queue.indexOf(item);
      commit("changeLibraryAt", { index: itemIndex, item: item });
      writeLibraryToMemory(queue);
    },
    nextPriorityItem({ state, getters }, currItem) {
      let priorityQueue = getters.getPriorityQueue;
      priorityQueue.forEach((item) => {
        if (equals(item, currItem)) {
          item.value = 0;
        } else {
          item.value +=
            Math.random() *
              (state.priorityRandomnessInterval.max -
                state.priorityRandomnessInterval.min) +
            state.priorityRandomnessInterval.min +
            item.priority;
        }
      });
      writeLibraryToMemory(getters.getLibrary);
    },
    increaseIntervalIndex({ state, getters }) {
      let intervalQueue = getters.getIntervalQueue;
      state.intervalIndex = (state.intervalIndex + 1) % intervalQueue.length;
    },
    changeHighestPrioScale({ getters, state }, maxPrio) {
      let priorityQueue = getters.getPriorityQueue;
      priorityQueue.forEach((item) => {
        item.priority = Math.floor(
          (item.priority / getters.getMaxPrio) * maxPrio
        );
      });
      state.priorityRandomnessInterval = {
        min: Math.floor(
          (getters.getPriorityRandomnessInterval.min / getters.getMaxPrio) *
            maxPrio
        ),
        max: Math.floor(
          (getters.getPriorityRandomnessInterval.max / getters.getMaxPrio) *
            maxPrio
        ),
      };
      state.maxPrio = maxPrio;
      writeLibraryToMemory(getters.getLibrary);
    },
    changeHighestPrioCutOff({ state, getters }, maxPrio) {
      let priorityQueue = getters.getPriorityQueue;
      priorityQueue.forEach((item) => {
        if (item.priority > maxPrio) {
          item.priority = maxPrio;
        }
      });
      state.priorityRandomnessInterval = {
        min: Math.floor(
          (getters.getPriorityRandomnessInterval.min / getters.getMaxPrio) *
            maxPrio
        ),
        max: Math.floor(
          (getters.getPriorityRandomnessInterval.max / getters.getMaxPrio) *
            maxPrio
        ),
      };
      state.maxPrio = maxPrio;
      writeLibraryToMemory(getters.getLibrary);
    },
  },
});
