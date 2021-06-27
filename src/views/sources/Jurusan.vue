<template>
  <div id="authorDetail">
    <div class="container mx-auto text-left py-4">
      <h1 class="text-xl font-semibold py-4">Daftar Jurusan Politeknik Negeri Jakarta</h1>
      <div class="grid lg:grid-cols-3 gap-3">
        <div
          v-for="jurusan in jurusans"
          :key="jurusan.id"
          class="border p-4 rounded-md flex items-center flex-wrap mx-auto "
        >
          <img
            src="@/assets/content/content.png"
            alt="logoPnj"
            class="object-cover flex-row"
            style="height: 100px; width: 100px"
          />
          <div class="block ml-6 w-64">
            <p class="text-xl font-semibold">
              {{ jurusan.nama_jurusan }}
            </p>
            <p class="text-lg mt-2">
              Penelitian : <strong>{{ jurusan.penelitian_count }}</strong>
            </p>
            <p class="text-lg mt-2">
              Pengabdian : <strong>{{ jurusan.pengabdian_count }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jurusans: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://admin-be.repo-up2m.com/api/list-jurusan"
    );
    const data = response.data.data;
    this.jurusans = data;
    console.log(data);
  },
};
</script>

<style lang="scss" scoped></style>
