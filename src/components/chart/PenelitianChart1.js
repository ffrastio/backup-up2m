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
      default: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Data Pelaksanaan Penelitian Per Skim",
          fontSize: "14",
        },
        legend: {
          position: "bottom",
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                }
            }]
        }
      },
    },
  },

  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
