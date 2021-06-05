import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
      // {
      //   responsive: true,
      //   maintainAspectRatio: false,
      //   title: {
      //     display: true,

      //     fontSize: "14",
      //   },
      //   legend: {
      //     position: "top",
      //   },
      //   scales: {
      //     yAxes: [
      //       {
      //         ticks: {
      //           suggestedMin: 0,
      //         },
      //       },
      //     ],
      //   },
      // },
    },
  },

  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
