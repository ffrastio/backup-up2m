<template>
  <div id="authorDetail">
    <p class="text-3xl font-semibold border-b py-4">Detail Author</p>
    <div class="container mx-auto">
      <div class="flex items-center p-4 text-left">
        <div class="flex w-20 h-20">
          <img
            class="w-20 h-20 object-cover"
            alt="Foto dosen"
            src="@/assets/content/content.png"
          />
        </div>
        <div class="ml-10 items-center">
          <p class="text-left text-2xl font-semibold">
            {{ author.gelar_depan }} {{ author.nama }}
            {{ author.gelar_belakang }}
          </p>
          <p>
            {{ author.jurusan }}
          </p>
          <p class="text-gray-500 text-sm font-semibold tracking-wide">
            {{ author.nidn }}
          </p>
        </div>
      </div>
      <div class="container mx-auto p-4">
        <p class="text-xl font-semibold uppercase text-left">Penelitian :</p>
        <div class="py-4" v-if="author.penelitian.length > 0">
          <!-- START Table Penelitian -->
          <table class="border w-full">
            <thead class="bg-gray-400 text-white">
              <tr>
                <th class="border p-4">Judul</th>
                <th class="border p-4">Skim Penelitian</th>
                <th class="border p-4">Ketua Penelitian</th>
                <th class="border p-4">Tahun</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="penelitian in author.penelitian" :key="penelitian.id">
                <td class="border p-4 text-left w-50">
                  {{ penelitian.judul }}
                </td>
                <td class="border p-4 ">{{ penelitian.skim_penelitian }}</td>
                <td class="border p-4 ">
                  {{ penelitian.nama_ketua_penelitian }}
                </td>
                <td class="border p-4 ">{{ penelitian.tahun }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <p class="text-xl font-medium">Tidak ada data Penelitian Masyarakat</p> 
        </div>
      </div>
      <div class="container mx-auto p-4">
        <p class="text-xl font-semibold uppercase text-left">Pengabdian :</p>
        <div class="py-4" v-if="author.pengabdian.length > 0">
          <!-- START Table pengabdian -->
          <table class="border w-full">
            <thead class="bg-gray-400 text-white">
              <tr>
                <th class="border p-4">Judul</th>
                <th class="border p-4">Skim pengabdian</th>
                <th class="border p-4">Ketua pengabdian</th>
                <th class="border p-4">Tahun</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="pengabdian in author.pengabdian" :key="pengabdian.id">
                <td class="border p-4 text-left w-50">
                  {{ pengabdian.judul }}
                </td>
                <td class="border p-4 ">{{ pengabdian.skim_pengabdian }}</td>
                <td class="border p-4 ">
                  {{ pengabdian.nama_ketua_pengabdian }}
                </td>
                <td class="border p-4 ">{{ pengabdian.tahun }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4" v-else >
          <p class="text-xl font-medium">Tidak ada data Pengabdian Masyarakat</p> 
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
      author: [],
    };
  },
  methods: {
    detailAuthor(data) {
      this.author = data;
    },
  },

  mounted() {
    axios
      .get("https://admin-be.repo-up2m.com/api/author/" + this.$route.params.id)
      .then((res) => this.detailAuthor(res.data.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped></style>
