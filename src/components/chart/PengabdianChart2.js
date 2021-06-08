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
        layout: {
          padding: {
              left: 50,
              right: 50,
              top: 0,
              bottom: 40
          }
      },
        title: {
          display: false,
          text: "Data Pelaksanaan Pengabdian Per Jurusan",
          fontSize: "14",
        },
        legend: {
          display: false,
          position: "bottom",
        },
        scales: {
          yAxes: [
            {
              id: "first-y-axis",
              type: 'linear',
              ticks: {
                suggestedMin: 0,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                suggestedMin: 15,
              },
            },
          ],
        },
      },
    },
  },

  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
