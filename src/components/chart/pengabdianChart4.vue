<template>
  <div>
    <div>
      <!-- START Judul Grafik -->
      <div class=" mt-2 text-md font-semibold">
        <h3 class="text-center">
          Data Pelaksanaan Pengabdian <br> Per Skim {{ year }}
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
    <div v-if="pengabdian.length <= 0" class="text-center mt-12"><p class="font-bold text-xl">Data Belum Tersedia <br> Silahkan Pilih Tahun yang tersedia</p></div>
    <div v-else>
      <BarChart :chart-data="datacollection" />
    </div>
  </div>
</template>

<script>
import BarChart from "./PengabdianChart4";
import axios from "axios";
export default {
  components: {
    BarChart,
  },
  data() {
    return {
      datacollection: null,
      loaded: false,
      skim: [],
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
        labels: this.skim,
        datasets: [
          {
            label: this.year,
            backgroundColor: [
              "rgb(69,181,178)",
              "rgb(140,194,33)",
              "rgb(227,218,32)",
              "rgb(239,117,19)",
              "rgb(173,161,126)",
              "rgb(139,71,58)",
              "rgb(228,148,187)",
              "rgb(206,66,38)",
              "rgb(170,194,113)",
              "rgb(170,161,161)",
            ],
            data: this.pengabdian,
          },
        ],
      };
    },
    getPengabdian(year) {
      var url =
        "http://admin-be.repo-up2m.com/api/skim-pengabdian?tahun=" + year;
      // var headers = {
      //   headers: {
      //   }
      // }
      axios
        .get(url)
        .then((x) => {
          var results = x.data.data;
          var skim = [];
          var pengabdian = [];
          results.map((obj) => {
            pengabdian.push(parseInt(obj.skim_count));
            skim.push(obj.skim_pengabdian);
          });
          this.skim = skim.map(function(x) {
            return x;
          });
          this.pengabdian = pengabdian.map(function(y) {
            return y;
          });
          // console.log(this.skim);
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
