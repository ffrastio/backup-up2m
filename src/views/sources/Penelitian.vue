<template>
  <div id="penelitian">
    <div class="hijau">
      <div class="flex items-center px-4 py-4 container mx-auto">
        <h1 class="text-white font-bold text-2xl text-left">
          Penelitian
        </h1>
      </div>
    </div>
    <div class="container py-4">
      <!-- START Table -->
      <table id="myTable" class="table table-bordered py-4">
        <thead>
          <tr>
            <th class="text-center">Judul</th>
            <th class="text-center">Nama Ketua Penelitian</th>
            <th class="text-center">Skim Penelitian</th>
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
  name: "Penelitian",
  components: {},
  data() {
    return {
      authors: [],
    };
  },
  mounted() {
    this.getAuthors();
  },
  methods: {
    getAuthors() {
      axios
        .get("https://admin-be.repo-up2m.com/api/list-penelitian?limit=10000")
        .then((response) => {
          $("#myTable").DataTable({
            data: response.data.data.data,
            columns: [
              { data: "judul" },
              { data: "nama_ketua_penelitian" },
              { data: "skim_penelitian" },
              { data: "tahun" },
            ],
          });
          console.log(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<style scoped>
.hijau {
  background: #008797;
}
</style>
