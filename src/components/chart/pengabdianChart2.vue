<template>
  <div>
    <div>
      <!-- START Judul Grafik -->
      <div class=" mt-2 text-md font-semibold">
        <h3 class="text-center">
          Data Pelaksanaan Pengabdian <br> Per Jurusan {{ year }}
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
    <div v-if="pengabdian.length <= 0" class="text-center mt-12">
      <p class="font-bold text-xl">
        Data Belum Tersedia <br />
        Silahkan Pilih Tahun yang tersedia
      </p>
    </div>
    <div v-else>
      <BarChart :chart-data="datacollection" />
    </div>
  </div>
</template>

<script>
import BarChart from "./PengabdianChart2";
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
      pengabdian: [],
      year: "2017",
      getYears: [],
    };
  },
  async mounted() {
    this.fillData();
    await this.getPengabdian(this.year);
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
      await this.getPengabdian(event.target.value);
    },
    fillData() {
      this.datacollection = {
        labels: this.jurusan,
        datasets: [
          {
            label: this.year,
            backgroundColor: [
              "rgb(248,147,41)",
              "rgb(240,84,36)",
              "rgb(0,135,151)",
              "rgb(215,245,43)",
              "rgb(144,99,61)",
              "rgb(36,155,205)",
              "rgb(255,226,38)",
              "rgb(69,147,172)",
              "rgb(30,64,153)",
            ],
            data: this.pengabdian,
          },
        ],
      };
    },
    getPengabdian(year) {
      var url = "https://admin-be.repo-up2m.com/api/jurusan-pengabdian?tahun=" + year;
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
          var pengabdian = [];
          results.map((obj) => {
            pengabdian.push(parseInt(obj.pengabdian_count));
            jurusan.push(obj.jurusan);
          });
          this.jurusan = jurusan.map(function(x) {
            return x;
          });
          this.pengabdian = pengabdian.map(function(y) {
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
