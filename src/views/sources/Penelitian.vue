<template>
  <div id="penelitian">
    <div class="bg-primary">
      <div class="flex items-center px-4 py-4 container mx-auto">
        <h1 class="text-white font-bold text-2xl text-left">
          Penelitian
        </h1>
        <div class="py-4 text-left mx-auto">
          <input
            type="text"
            v-model="searchPenelitian"
            placeholder="Search Author. . ."
            class="border-2 border-gray-300 bg-white h-10 px-5 lg:pr-16 rounded-md text-sm focus:outline-none lg:w-96 w-40"
          />
        </div>
      </div>
    </div>
    <!-- START Kategori Test -->
    <!-- <section v-for="penelitian in penelitians" :key="penelitian.id">
      <div class="container mx-auto flex items-center flex-row ">
        <input type="checkbox" /><label for="#" class="ml-4">{{
          penelitian.skim_penelitian
        }}</label>
      </div>
    </section> -->
    <!-- END KATEGORI -->
    <!--START Table -->
    <section id="table" class="overflow-x-auto container mx-auto w-full py-4">
      <table class="table-responsive">
        <thead>
          <tr>
            <th class="w-1/2 border px-4 py-2">Judul Penelitian</th>
            <th class="w-1/6 border px-4 py-2">Skim Penelitian</th>
            <th class="w-1/6 border px-4 py-2">Ketua Pengusul</th>
            <th class="w-1/6 border px-4 py-2">Tahun</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="penelitian in filteredPenelitian"
            :key="penelitian.id"
            class="hover:bg-gray-100 border"
          >
            <td class="border px-6 py-4">
              <p class="text-left">
                {{ penelitian.judul }}
              </p>
            </td>

            <td class="px-6 py-4 border">
              <p class="text-gray-500 text-sm font-semibold tracking-wide">
                {{ penelitian.skim_penelitian }}
              </p>
            </td>
            <td class="px-6 py-4 text-center border">
              <p class="text-gray-500 text-sm font-semibold tracking-wide">
                {{ penelitian.nama_ketua_penelitian }}
              </p>
            </td>
            <td class="px-6 py-4 text-center border">
              <p>{{ penelitian.tahun }}</p>
              <!-- {{ penelitian.jumlah_anggota }} -->
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!--END Table -->
    <div class="flex container mx-auto justify-between items-center">
      <div class="px-8 py-4 text-xl">
        <p>
          Total : <strong>{{ penelitians.length }}</strong>
        </p>
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
  name: "Penelitian",
  components: {},
  data() {
    return {
      searchPenelitian: "",
      penelitians: [],
    };
  },
  created() {
    this.viewPenelitian();
  },
  methods: {
    viewPenelitian() {
      axios
        .get("http://localhost:8001/api/list-penelitian?page=1")
        .then((res) => {
          this.penelitians = res.data.data.data;
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    filteredPenelitian: function() {
      var penelitian = this.penelitians;
      var searchPenelitian = this.searchPenelitian;

      if (!searchPenelitian) {
        return penelitian;
      }

      searchPenelitian = searchPenelitian.trim().toLowerCase();

      penelitian = penelitian.filter(function(item) {
        if (item.judul.toLowerCase().indexOf(searchPenelitian) !== -1) {
          return item;
        }
        if (
          item.nama_ketua_penelitian.toLowerCase().indexOf(searchPenelitian) !==
          -1
        ) {
          return item;
        }
      });

      return penelitian;
    },
  },
};
</script>

<style scoped></style>
