<template>
  <div id="home-container">
    <div id="card-container">
      <Card
        class="card"
        v-for="(category, index) in $store.getters.getStats"
        @clicked="clicked"
        :class="index === $store.getters.getStats.length - 1 ? 'active' : ''"
        :key="category.statID"
        :statID="category.statID"
        :name="category.statName"
        :val="category.val"
        :statIndex="index"
        :average="$store.getters.getStatsAverage[index]"
        :weeklyAverage="$store.getters.getStatsWeeklyAverage[index]"
        :monthlyAverage="$store.getters.getStatsMonthlyAverage[index]"
        :yearlyAverage="$store.getters.getStatsYearlyAverage[index]"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Cards/Card";

export default {
  name: "Home",
  components: {
    Card,
  },
  data: function () {
    return {
      currActiveStatIndex: 3,
      statIDs: this.$store.getters.getStats.map((stat) => stat.statID),
    };
  },
  methods: {
    clicked(index) {
      this.currActiveStatIndex = index;

      // applies active class to the selected card and removes it from siblings
      let el = this.$el.querySelector("#" + this.statIDs[index]);
      el.classList.add("active");

      let siblings = [];
      let n = el.parentNode.firstChild;
      for (; n; n = n.nextSibling)
        if (n.nodeType == 1 && n != el) siblings.push(n);

      siblings.forEach((el) => el.classList.remove("active"));
    },
    handleKey(e) {
      if (e.key === "ArrowRight") {
        this.clicked(
          Math.min(this.statIDs.length - 1, this.currActiveStatIndex + 1)
        );
      } else if (e.key === "ArrowLeft") {
        this.clicked(Math.max(this.currActiveStatIndex - 1, 0));
      }
    },
  },
  mounted: function () {
    document.addEventListener("keydown", this.handleKey);
  },
  unmounted: function () {
    document.removeEventListener("keydown", this.handleKey);
  },
};
</script>

<style scoped>
#home-container {
  overflow: hidden;
  background-color: #24242e;
  height: 100vh;
}

#card-container {
  display: flex;
  margin-top: 10vh;
  margin-left: 5vw;
  padding: 5%;
}

.card {
  cursor: pointer;
  height: 60vh;
  width: 40vw;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1.5rem 0 2rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}

.card:not(:first-child) {
  margin-left: -30vw;
}

.active {
  transform: translateY(-20px);
  transition: 0.2s ease-out;
}

.active ~ .card {
  position: relative;
  left: 25vw;
  transition: 0.2s ease-out;
}
</style>
