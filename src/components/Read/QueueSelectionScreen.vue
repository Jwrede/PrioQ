<template>
  <div class="the-grid__container">
    <p id="priority-title" class="title">Priority Queue Mode</p>
    <p id="interval-title" class="title">Interval Mode</p>
    <div
      class="page priority"
      ref="priority"
      :class="showPriority"
      @click="open('priority')"
    >
      <Read mode="priority" @backToMenu="backToMenu" />
    </div>
    <div
      class="page interval"
      ref="interval"
      :class="showInterval"
      @click="open('interval')"
    >
      <Read mode="interval" @backToMenu="backToMenu" />
    </div>
  </div>
</template>

<script>
import Read from "./read/Read";

export default {
  name: "QueueSelectionScreen",
  components: {
    Read,
  },
  computed: {
    showPriority() {
      let classes =
        this.$store.getters.getActiveReadTab === "priority" ? "active " : "";
      classes +=
        this.$store.getters.getActiveReadTab === "interval" ? "inactive" : "";
      return classes;
    },
    showInterval() {
      let classes =
        this.$store.getters.getActiveReadTab === "interval" ? "active " : "";
      classes +=
        this.$store.getters.getActiveReadTab === "priority" ? "inactive" : "";
      return classes;
    },
  },
  methods: {
    open(tab) {
      if (this.$store.getters.getActiveReadTab === "main" && this.openable) {
        this.$store.commit("changeActiveReadTab", tab);
        setTimeout(() => {
          this.$store.commit("changeIsZoomedIn", true);
        }, 1000);
      }
    },
    backToMenu() {
      if (this.$store.getters.getActiveReadTab !== "main") {
        this.$store.commit("changeIsZoomedIn", false);
        this.openable = false;
        this.$store.commit("changeActiveReadTab", "main");
        setTimeout(() => (this.openable = true), 20);
        let showIntroBoolWindow =
          this.$store.getters.getShowIntro &&
          this.$store.getters.getShowIntroTab["read"];
        if (showIntroBoolWindow) {
          setTimeout(() => this.showIntroWindow(), 1000);
        }
      }
    },
  },
  data: function () {
    return {
      inMainMenu: true,
      openable: true,
    };
  },
};
</script>

<style scoped>
.the-grid__container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: 1s;
  color: white;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  transform: scale(0.8);
  transition: 1s ease;
  cursor: pointer;
  width: 40%;
  height: 40%;
}

.page:hover {
  transform: scale(0.85);
  transition-duration: 0.5s;
}

.page.active {
  transform: scale(1);
  border-radius: 0;
  width: 100%;
  height: 100vh;
  cursor: default;
}
.page.inactive {
  height: 0;
  width: 0;
}

.title {
  position: absolute;
  font-size: 22px;
}

#priority-title {
  left: 24%;
  top: 25%;
}

#interval-title {
  left: 70%;
  top: 25%;
}

@media only screen and (min-width: 1500px) {
  #priority-title {
    left: 25%;
    top: 25%;
  }

  #interval-title {
    left: 71%;
    top: 25%;
  }
}

@media only screen and (min-width: 2000px) {
  #priority-title {
    left: 26%;
    top: 25%;
  }

  #interval-title {
    left: 72%;
    top: 25%;
  }
}
</style>