<template>
  <div class="container" :id="statID" @click="clicked">
    <h3 class="title">{{ name }}</h3>
    <div :id="statID + 'chart'" class="chart"></div>
    <div></div>
  </div>
</template>

<script>
import Plotly from "plotly.js-dist";

export default {
  name: "Card",
  props: [
    "statID",
    "name",
    "val",
    "statIndex",
    "average",
    "weeklyAverage",
    "monthlyAverage",
    "yearlyAverage",
  ],
  data: function () {
    return {
      layout: {
        plot_bgcolor: "#17141d",
        paper_bgcolor: "#17141d",
        hovermode: false,
        font: {
          color: "white",
        },
        xaxis: {
          showgrid: false,
          fixedrange: true,
          tickangle: 0,
        },
        yaxis: {
          showgrid: false,
          fixedrange: true,
        },
      },
      interval: null,
    };
  },
  methods: {
    clicked: function () {
      this.$emit("clicked", this.statIndex);
    },
    drawPlot: function () {
      Plotly.newPlot(
        this.statID + "chart",
        [
          {
            type: "bar",
            y: [
              this.val,
              this.weeklyAverage.val,
              this.monthlyAverage.val,
              this.yearlyAverage.val,
              this.average.val,
            ],
            x: [
              "Today",
              "Weekly<br>Average",
              "Monthly<br>Average",
              "Yearly<br>Average",
              "Average",
            ],
            marker: {
              color: "#63ADF2",
            },
          },
        ],
        this.layout,
        {
          responsive: true,
          displayModeBar: false,
        }
      );
    },
  },
  mounted: function () {
    this.drawPlot();
    this.interval = setInterval(this.drawPlot, 1000);
  },
  beforeUnmount: function () {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
* {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
.container {
  display: grid;
  grid-template-rows: 20% auto 10%;
}
.title {
  color: white;
  font-weight: 300;
  font-size: 22px;
  left: 20px;
  top: 15px;
  margin-left: 3vw;
}
.chart {
  width: 40vw;
}
</style>
