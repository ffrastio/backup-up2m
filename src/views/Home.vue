<template>
  <div class="home">
    <!-- Start Section Hero -->
    <section class="container flex mx-auto items-center text-left">
      <div
        class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-14"
      >
        <!--Left Col-->
        <div
          class="flex flex-col w-full lg:w-1/2 justify-items-start items-start pt-12 pb-24 px-6"
        >
          <h1 class="font-bold text-3xl my-4">Temukan Data yang Diinginkan</h1>
          <p class="leading-normal mb-4">
            UP2M Menyediakan berbagai data dan <br />
            keperluan untuk mendukung penelitian kamu
          </p>
          <button
            class="bg-primary hover:bg-primary-200 text-white hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border"
          >
            Temukan !
          </button>
        </div>
        <!--Right Col-->
        <div class="w-full lg:w-1/2 lg:py-6 text-center">
          <!--Add your product image here-->
          <img
            src="@/assets/content/header.png"
            alt="Header"
            class="object-cover mx-auto img-header"
          />
        </div>
      </div>
    </section>
    <!-- Ends Section Hero -->
    <!-- Start Data Statistik -->
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="text-xl text-left font-bold py-4 px-4">Data Statistik</div>
        <div class="px-4">
          <div v-if="!userLogin"></div>
          <button
            href="#"
            v-else
            id="downloadPdf"
            class="bg-primary hover:bg-primary-200 text-white hover:text-white rounded-xl shadow hover:shadow-lg py-2 px-2 border"
            @click="exportToPDF(0)"
          >
            <font-awesome-icon icon="file-pdf" class="mr-2" />Download
          </button>
        </div>
      </div>
      <div
        class="bg-gray-200 px-4 py-4 grid grid-cols-1 gap-2 md:grid-cols-2 mb-4 animate-popup"
      >
        <div class="bg-white text-left">
          <Chart1 class="bg-white rounded" id="chart1" />
        </div>
        <!-- <div class="bg-white text-left">
          <select class="dropdown border rounded px-1 py-1 mt-2 ml-6" id="dd">
            <option value="" selected="selected">Pilih Tahun</option>
            <option value="dps1">2017</option>
            <option value="dps2">2018</option>
            <option value="dps3">2019</option>
            <option value="dps4">2020</option>
            <option value="dps5">2021</option>
          </select>
          <Chart2 class="bg-white rounded" id="chart2" />
        </div> -->
        <!-- <div class="bg-white text-left">
          <select class="dropdown border rounded px-1 py-1 mt-2 ml-6" id="dd">
            <option value="" selected="selected">Pilih Tahun</option>
            <option value="dps1">2017</option>
            <option value="dps2">2018</option>
            <option value="dps3">2019</option>
            <option value="dps4">2020</option>
            <option value="dps5">2021</option>
          </select>
          <Chart3 class="bg-white rounded" id="chart3" />
        </div>
        <div class="bg-white text-left">
          <select class="dropdown border rounded px-1 py-1 mt-2 ml-6" id="dd">
            <option value="" selected="selected">Pilih Tahun</option>
            <option value="dps1">2017</option>
            <option value="dps2">2018</option>
            <option value="dps3">2019</option>
            <option value="dps4">2020</option>
            <option value="dps5">2021</option>
          </select>
          <Chart4 class="bg-white rounded" id="chart4" />
        </div> -->
      </div>
    </div>
    <!-- Ends Data Statistik -->
  
  </div>
</template>

<script>
// @ is an alias to /src
import Chart1 from "@/components/chart/penelitianChart1.vue";
// import Chart2 from "@/components/chart/pengabdianChart2.vue";
// import Chart3 from "@/components/chart/penelitianChart3.vue";
// import Chart4 from "@/components/chart/pengabdianChart4.vue";
import Exporter from "vue-chartjs-exporter";
import { jsPDF } from "jspdf";
export default {
  name: "Home",
  components: {
    Chart1,
    // Chart2,
    // Chart3,
    // Chart4,
  },
  data(){
    return{
      userLogin: this.$cookies.get('uid')
    }
  },
  methods: {
    exportToPDF() {
      // this.download_status = "Processing...";
      let chart1 = document.getElementById("chart1");
      let chart2 = document.getElementById("chart2");
      let chart3 = document.getElementById("chart3");
      let chart4 = document.getElementById("chart4");
      var doc = new jsPDF("p", "pt");
      doc.text("Laporan Grafik UP2M Politeknik Negeri Jakarta", 240, 40);
      const exp = new Exporter([chart1, chart2, chart3, chart4]);
      exp.export_pdf().then((pdf) => {
        pdf.save("Laporan Grafik.pdf");
        // this.download_status = "Download Charts";
      });
    },
  },
};
</script>
<style>
.img-header {
  max-height: 400px;
}
</style>
