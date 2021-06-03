<script>
import { Bar } from "vue-chartjs";
// import axios from 'axios';

export default {
  extends: Bar,
  data() {
    return {
      penelitianData: null,
      lineLoad: false,
    };
  },
  mounted() {
    let yearData = [];
    let currentYear = new Date().getFullYear();
    for (var i = currentYear; i > currentYear - 5; i--) {
      // console.log(i);
      yearData.push(i);
    }

    // var bgColor
    // backgrounnya aku busat statis aja ya
    // axios.get('http://localhost:8001/api/list-jurusan')
    // .then(res => res.data)
    // .then(function(res){
    //     var data = res.data,
    //         dataField = [];
    //     // kok nggk bisa ya mass kira" knp? map nggk terdeteksi, kurang paham saya mas
    //     data.map(function(a,key){
    //         var numData = []
    //         key.jurusan.map(function(j,val){
    //             numData.push(val.penelitian_count)
    //         })
    //         dataField.push({
    //             label: key.kategori,
    //             backgroundColor: "transparent",
    //             pointBackgroundColor: "rgb(27,64,145)",
    //             borderColor: "rgb(27,64,145)",
    //             data: numData
    //         })
    //     })
    //     console.log(dataField)

    //     this.penelitianData = dataField
    //     this.lineLoad = true
    // })

    this.renderChart(
      {
        // labels: yearData,
        // datasets: this.penelitianData
        labels: ["2018"],
        datasets: [
          {
            label: "Teknik Informatika dan Komputer",
            backgroundColor: "rgb(27,64,145)",
            pointBackgroundColor: "rgb(27,64,145)",
            borderColor: "rgb(27,64,145)",
            data: [1, 6, 6, 5],
          },
          {
            label: "Teknik Mesin",
            backgroundColor: "rgb(52,157,204)",
            pointBackgroundColor: "rgb(52,157,204)",
            borderColor: "rgb(52,157,204)",
            data: [2, 5, 6, 11],
          },
          {
            label: "Teknik Sipil",
            backgroundColor: "rgb(151,98,44)",
            pointBackgroundColor: "rgb(151,98,44)",
            borderColor: "rgb(151,98,44)",
            data: [3, 5, 6, 7],
          },
          {
            label: "Teknik Elektro",
            backgroundColor: "rgb(242,113,9)",
            pointBackgroundColor: "rgb(242,113,9)",
            borderColor: "rgb(242,113,9)",
            data: [4, 6, 8, 9],
          },
          {
            label: "Teknik Grafika dan Penerbitan",
            backgroundColor: "rgb(206,203,48)",
            pointBackgroundColor: "rgb(206,203,48)",
            borderColor: "rgb(206,203,48)",
            data: [5, 5, 5, 5],
          },
          {
            label: "Administrasi dan Niaga",
            backgroundColor: "rgb(0,135,151)",
            pointBackgroundColor: "rgb(0,135,151)",
            borderColor: "rgb(0,135,151)",
            data: [6, 4, 4, 6],
          },
          {
            label: "Akutansi",
            backgroundColor: "rgb(204,57,55)",
            pointBackgroundColor: "rgb(204,57,55)",
            borderColor: "rgb(204,57,55)",
            data: [7, 7, 5, 13],
          },
          {
            label: "P3M",
            backgroundColor: "rgb(132,94,194)",
            pointBackgroundColor: "rgb(132,94,194)",
            borderColor: "rgb(132,94,194)",
            data: [8, 4, 2, 0],
          },
          // {
          //     label: "MTTE",
          //     backgroundColor: "rgb(97,177,90)",
          //     pointBackgroundColor: "rgb(97,177,90)",
          //     borderColor: "rgb(97,177,90)",
          //     data: [0, 1, 0, 1]
          // },
          // {
          //     label: "MP-WMBK",
          //     backgroundColor: "rgb(255,206,137)",
          //     pointBackgroundColor: "rgb(255,206,137)",
          //     borderColor: "rgb(255,206,137)",
          //     data: [0, 0, 0, 1]
          // }
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Data Pelaksanaan Penelitian Per Jurusan",
          fontSize: 14,
        },
        legend: {
          position: "bottom",
          labels: {
            // fontFamily : 'Poppins',
          },
        },
        elements: {
          line: {
            borderWidth: "2",
          },
        },
      }
    );
  },
};
</script>
