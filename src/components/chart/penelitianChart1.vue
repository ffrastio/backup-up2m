<template>
  <div>
    <div>
      <div>
        <select
          name="LeaveType"
          @change="onChange($event)"
          class="dropdown border rounded px-1 py-1 mt-2 ml-6"
          v-model="year"
        >
          <option v-for="getYear in getYears" :key="getYear.id">{{
            getYear
          }}</option>
        </select>
      </div>
      <div>
        <h3 class="text-center">
          Data Pelaksanaan Penelitian Per Jurusan {{ year }}
        </h3>
      </div>
    </div>
    <div>
      <BarChart :chart-data="datacollection" />
    </div>
    <!-- <div>
      Data tidak ada
    </div> -->
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
      datacollection: [],
      loaded: false,
      jurusan: [],
      penelitian: [],
      year: new Date().getFullYear(),
      getYears: [],
    };
  },
  async mounted() {
    this.fillData();
    await this.getPenelitian(this.year);
    this.getDataTahunan();
  },
  methods: {
    getDataTahunan() {
      var lampau = [];
      var date = new Date(2017, 1, 1);
      var now = new Date();
      for (var d = date; d <= now; d.setFullYear(d.getFullYear() + 1)) {
        lampau.push(new Date(d).getFullYear());
      }
      this.getYears = lampau;
    },
    // combo box
    onChange: async function onChange(event) {
      await this.getPenelitian(event.target.value);
      console.log(event.target.value);
    },
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
    getPenelitian(year) {
      var url = "http://admin-be.repo-up2m.com/api/penelitian?tahun=" + year;
      axios
        .get(url)
        .then((x) => {
          var results = x.data.data;
          var jurusan = [];
          var penelitian = [];
          results.map((obj) => {
            penelitian.push(parseInt(obj.penelitian_count));
            jurusan.push(obj.jurusan);
          });
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
