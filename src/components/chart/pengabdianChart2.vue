<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: ["2019"],
        datasets: [
          {
            label: "Teknik Informatika dan Komputer",
            backgroundColor: "rgb(27,64,145)",
            pointBackgroundColor: "rgb(27,64,145)",
            borderColor: "rgb(27,64,145)",
            data: [6, 5],
          },
          {
            label: "Teknik Mesin",
            backgroundColor: "rgb(52,157,204)",
            pointBackgroundColor: "rgb(52,157,204)",
            borderColor: "rgb(52,157,204)",
            data: [11],
          },
          {
            label: "Teknik Sipil",
            backgroundColor: "rgb(151,98,44)",
            pointBackgroundColor: "rgb(151,98,44)",
            borderColor: "rgb(151,98,44)",
            data: [7],
          },
          {
            label: "Teknik Elektro",
            backgroundColor: "rgb(242,113,9)",
            pointBackgroundColor: "rgb(242,113,9)",
            borderColor: "rgb(242,113,9)",
            data: [9],
          },
          {
            label: "Teknik Grafika dan Penerbitan",
            backgroundColor: "rgb(206,203,48)",
            pointBackgroundColor: "rgb(206,203,48)",
            borderColor: "rgb(206,203,48)",
            data: [5],
          },
          {
            label: "Administrasi dan Niaga",
            backgroundColor: "rgb(0,135,151)",
            pointBackgroundColor: "rgb(0,135,151)",
            borderColor: "rgb(0,135,151)",
            data: [4, 6],
          },
          {
            label: "Akutansi",
            backgroundColor: "rgb(204,57,55)",
            pointBackgroundColor: "rgb(204,57,55)",
            borderColor: "rgb(204,57,55)",
            data: [13],
          },
          {
            label: "P3M",
            backgroundColor: "rgb(132,94,194)",
            pointBackgroundColor: "rgb(132,94,194)",
            borderColor: "rgb(132,94,194)",
            data: [2, 0],
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Data Pelaksanaan Pengabdian Per Jurusan",
          fontSize: 14,
        },
        legend: {
          position: "bottom",
          // labels: {
          //     // fontFamily : 'Poppins',
          //     usePointStyle: true,
          // }
        },
      }
    );
  },
};
</script>
