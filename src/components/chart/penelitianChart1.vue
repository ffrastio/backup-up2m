<template>
  <div>
    <select
      class="dropdown border rounded px-1 py-1 mt-2 ml-6"
      
      v-model="year"
    >
      <option value="2017" selected="selected">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
    </select>
    <BarChart :chart-data="datacollection" />
  </div>
</template>

<script>
import BarChart from "./PenelitianChart1";
import axios from "axios";
export default {
  components: {
    BarChart,
  },
  data() {
    return {
      datacollection: null,
      loaded: false,
      jurusan: [],
      penelitian: [],
      year: '2017',
    };
  },
  async mounted() {
    this.fillData();
    await this.getPenelitian();
  },
  methods: {
    
    fillData() {
      this.datacollection = {
        labels: this.jurusan,
        datasets: [
          {
            label: this.year,
            backgroundColor: [
              "rgb(174,104,104)",
              "rgb(197,174,116)",
              "rgb(151,174,102)",
              "rgb(106,191,186)",
              "rgb(122,152,94)",
              "rgb(128,110,168)",
              "rgb(202,52,205)",
            ],
            data: this.penelitian,
          },
        ],
      };
    },
    getPenelitian() {
      var url = "http://localhost:8001/api/penelitian?tahun=" + this.year;
      // var headers = {
      //   headers: {
      //   }
      // }
      axios
        .get(url)
        .then((x) => {
          // console.log(x.data.data);
          var results = x.data.data;
          var jurusan = [];
          var penelitian = [];
          for (var i = 6; i >= 0; i--) {
            var t = parseInt(results[i].penelitian_count);
            var j = results[i].jurusan;
            penelitian.push(t);
            jurusan.push(j);
          }
          this.jurusan = jurusan.map(function(x) {
            return x;
          });
          this.penelitian = penelitian.map(function(y) {
            return y;
          });
          // console.log(this.jurusan);
          this.fillData();
        })
        .catch((x) => {
          console.log(x);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
