<template>
  <div>
    <div>
      <!-- START Judul Grafik -->
      <div class=" mt-2 text-md font-semibold">
        <h3 class="text-center">
          Data Pelaksanaan Penelitian <br> Per Jurusan {{ year }}
        </h3>
      </div>
      <!-- END Judul Grafik -->
      <!-- START Kategori Tahun -->
      <div class="mb-4">
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
      <!-- END Kategori Tahun -->
    </div>
    <!-- START Grafik -->
    <div v-if="penelitian.length <= 0" class="text-center mt-12">
      <p class="font-bold text-xl">
        Data Belum Tersedia <br />
        Silahkan Pilih Tahun yang tersedia
      </p>
    </div>
    <div v-else>
      <BarChart :chart-data="datacollection" />
    </div>
    <!-- END Grafik -->
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
      year: "2017",
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
    },
    fillData() {
      this.datacollection = {
        labels: this.jurusan,
        datasets: [
          {
            label: this.year,
            backgroundColor: [
              "rgb(255,134,127)",
              "rgb(209,91,39)",
              "rgb(195,170,239)",
              "rgb(224,210,109)",
              "rgb(139,160,65)",
              "rgb(89,89,89)",
              "rgb(128,213,207)",
              "rgb(69,147,172)",
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
