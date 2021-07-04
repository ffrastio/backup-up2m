<template>
  <div id="pengabdian">
    <div class="hijau">
      <div class="flex items-center px-4 py-4 container mx-auto">
        <h1 class="text-white font-bold text-2xl text-left">
          Pengabdian
        </h1>
      </div>
    </div>
    <div class="container py-4">
      <p class="text-2xl font-semibold"> Data Pengabdian Repository UP2M <br>Politeknik Negeri Jakarta</p>
      <div class="py-2 text-left">
        <div v-if="!userLogin"></div>
        <button
          class="border rounded-md p-2 bg-green-500 text-white font-semibold"
          v-else
          @click="tableToExcel('table', 'Lorem Table')"
        >
          <font-awesome-icon icon="file-excel" class="mr-2" />Download
        </button>
      </div>
      <!-- START Table -->
      <table id="myTable" class="table table-bordered py-4" ref="table">
        <thead>
          <tr>
            <th class="text-center">Judul</th>
            <th class="text-center">Nama Ketua Pengabdian</th>
            <th class="text-center">Skim Pengabdian</th>
            <th class="text-center">Jurusan</th>
            <th class="text-center">Tahun</th>
          </tr>
        </thead>
      </table>
      <!-- ENDS Table -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "Pengabdian",
  components: {},
  data() {
    return {
      userLogin: this.$cookies.get("uid"),
      uri: "data:application/vnd.ms-excel;base64,",
      template:
        '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64: function(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
      },
      format: function(s, c) {
        return s.replace(/{(\w+)}/g, function(m, p) {
          return c[p];
        });
      },
    };
  },
  mounted() {
    this.getAuthors();
  },
  methods: {
    getAuthors() {
      axios
        .get("https://admin-be.repo-up2m.com/api/list-pengabdian?limit=10000")
        .then((response) => {
          $("#myTable").DataTable({
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            data: response.data.data.data,
            columns: [
              { data: "judul", class: "py-4 text-left w-1/2 px-4" },
              { data: "nama_ketua_pengabdian", class: " p-4" },
              { data: "skim_pengabdian", class: " p-4" },
              { data: "jurusan", class: " p-4" },
              { data: "tahun", class: "w-40 p-4" },
            ],
          });
          // console.log(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    tableToExcel(table, name) {
      if (!table.nodeType) table = this.$refs.table;
      var ctx = { worksheet: name || "Worksheet", table: table.innerHTML };
      window.location.href =
        this.uri + this.base64(this.format(this.template, ctx));
    },
  },
};
</script>

<style scoped>
.hijau {
  background: #008797;
}
</style>
