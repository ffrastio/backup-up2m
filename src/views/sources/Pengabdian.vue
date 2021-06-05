<template>
  <div id="pengabdian">
    <div class="bg-primary">
      <div class="block lg:flex items-center px-4 py-4 container mx-auto">
        <h1 class="text-white font-bold text-2xl text-left">
          Penelitian
        </h1>
        <div class="py-4 text-left mx-auto">
          <input
            type="text"
            v-model="search"
            placeholder="Search Author . . ."
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-md text-sm focus:outline-none lg:w-96 w-full"
            @keyup="searchPengabdian"
          />
        </div>
      </div>
    </div>

    <!--START Table -->
    <section id="table" class="overflow-x-auto container mx-auto py-4 w-full">
      <table class="table-responsive">
        <thead>
          <tr>
            <th class="w-1/2 border py-4">Judul Pengabdian</th>
            <th class="w-1/6 border py-4">Skim Pengabdian</th>
            <th class="w-1/6 border py-4">Ketua Pengusul</th>
            <th class="w-1/6 border py-4">Tahun</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="pengabdian in pengabdians"
            :key="pengabdian.id"
            class="hover:bg-gray-100 border"
          >
            <td class="border px-6 py-4">
              <p class="text-left">
                {{ pengabdian.judul }}
              </p>
            </td>

            <td class="px-6 py-4 border">
              <p class="text-gray-500 text-sm font-semibold tracking-wide">
                {{ pengabdian.skim_pengabdian }}
              </p>
            </td>
            <td class="px-6 py-4 text-center border">
              <p class="text-gray-500 text-sm font-semibold tracking-wide">
                {{ pengabdian.nama_ketua_pengabdian }}
              </p>
            </td>
            <td class="px-6 py-4 text-center border">
              <p>{{pengabdian.tahun}}</p>
              <!-- {{ pengabdian.jumlah_anggota }} -->
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!--END Table -->
    <div class="flex container mx-auto justify-between items-center">
      <div class="px-8 py-4">
        <p>Total : {{ pengabdians.length }}</p>
      </div>
      <div class="items-center space-x-2">
        <button
          class="border px-2 py-1 rounded border-primary hover:bg-primary hover:text-white"
        >
          Prev
        </button>
        <button
          class="border px-2 py-1 rounded border-primary hover:bg-primary hover:text-white"
        >
          1
        </button>
        <button
          class="border px-2 py-1 rounded border-primary hover:bg-primary hover:text-white"
        >
          2
        </button>
        <button
          class="border px-2 py-1 rounded border-primary hover:bg-primary hover:text-white"
        >
          3
        </button>
        <button
          class="border px-2 py-1 rounded border-primary hover:bg-primary hover:text-white"
        >
          4
        </button>
        <button
          class="border px-2 py-1 rounded border-primary hover:bg-primary hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pengabdian",
  components: {},
  data() {
    return {
      search: "",
      pengabdians: [],
    };
  },
  methods: {
    searchPengabdian() {
      axios
        .get(
          "http://admin-be.repo-up2m.com/api/list-pengabdian?q=" + this.search
        )
        .then((res) => (this.pengabdians = res.data.data.data))
        .catch((err) => console.log(err));
    },
  },
  // mounted() {
  //   axios
  //     .get("http://admin-be.repo-up2m.com/api/list-pengabdian")
  //     .then((res) => (this.pengabdians = res.data.data.data))
  //     .catch((err) => console.log(err));
  // },
  async mounted() {
    try {
      let response = await axios.get(
        "http://admin-be.repo-up2m.com/api/list-pengabdian"
      );
      this.pengabdians = response.data.data.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="scss" scoped></style>
