<template>
  <div id="author">
    <div class="border-b">
      <div class="container mx-auto flex px-4 break-normal">
        <!-- START Author -->
        <div class="flex mx-auto items-center">
          <div class="flex items-center ">
            <div class="block items center mr-4">
              <h1 class="font-semibold block text-2xl">Authors</h1>
              <p>Total : {{ total }}</p>
            </div>
            <font-awesome-icon icon="users" size="2x" />
          </div>
        </div>
        <!-- END Author -->
        <!-- START Jurusan Kategori dekstop -->
        <div class="hidden md:flex mx-auto items-center py-4">
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4"
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="All"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              Semuanya</label
            >
          </div>
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4"
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="ADMINISTRASI NIAGA"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              ADMINISTRASI NIAGA</label
            >
          </div>
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4 "
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="AKUNTANSI"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              AKUTANSI</label
            >
          </div>
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4 "
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="DIREKTORAT"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              DIREKTORAT</label
            >
          </div>
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4 "
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="TEKNIK ELEKTRO"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              TEKNIK ELEKTRO</label
            >
          </div>
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4 "
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="TEKNIK GRAFIKA DAN PENERBITAN"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              GRAFIKA & PENERBITAN</label
            >
          </div>
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4 "
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="TEKNIK INFORMATIKA DAN KOMPUTER"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              TEKNIK INFORMATIKA</label
            >
          </div>
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4 "
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="TEKNIK MESIN"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              TEKNIK MESIN</label
            >
          </div>
          <div
            class="block items-center justify-items-center transform duration-500 transition hover:scale-110 ml-4 "
          >
            <label
              ><input
                type="radio"
                v-model="selectJurusan"
                value="TEKNIK SIPIL"
                class="hidden"
              />
              <img
                src="@/assets/content/content.png"
                alt="logoPnj"
                class="object-cover mx-auto mb-2"
                style="height: 50px"
              />
              TEKNIK SIPIL</label
            >
          </div>
        </div>

        <!-- END Jurusan Kategori Dekstop -->
        <!-- START Jurusan Kategori Mobile -->
        <div class="items-center justify-center overflow-x-auto lg:hidden">
          <select
            class="dropdown border-2 rounded-xl border-primary px-1 py-1 mt-3 ml-6 w-40"
            v-model="selectJurusan"
          >
            <option value="All">Semua Jurusan</option>
            <option value="ADMINISTRASI NIAGA">Administrasi Niaga</option>
            <option value="AKUTANSI">Akutansi</option>
            <option value="EKNIK ELEKTRO">Teknik Elektro</option>
            <option value="TEKNIK GRAFIKA DAN PENERBITAN"
              >Teknik Grafika & Penerbitan</option
            >
            <option value="TEKNIK INFORMATIKA DAN KOMPUTER"
              >Teknik Informatika & Komputer</option
            >
            <option value="teknik mesin">Teknik Mesin</option>
            <option value="teknik sipil">Teknik Sipil</option>
          </select>
        </div>
        <!-- END Jurusan Kategori Mobile -->
      </div>
    </div>
    <div class="container justify-between flex items-center">
      <div>
        <p class="text-xl font-semibold">Tabel Daftar Author</p>
      </div>
      <!-- START Search Author -->
      <div class="mt-4 text-left flex items-center">
        <input
          type="text"
          v-model="searchAuthor"
          placeholder="Search Author . . ."
          class="border-2 border-gray-200 bg-white h-10 px-5 rounded-md text-sm focus:outline-none"
        />
      </div>
      <!-- END Search Author -->
    </div>
    <div class="container mx-auto py-4">
      <!-- <JwPagination :items="penulis" @changePage="onChangePage"></JwPagination> -->
    </div>
    <div class=" flex items-center ">
      <div class="overflow-x-auto w-full">
        <!-- START Table -->
        <table class="min-h-screen container mx-auto relative mb-4">
          <thead class="bg-gray-500 text-white">
            <tr>
              <th class="w-1/2 border px-4 py-2">Author</th>
              <th class="w-1/4 border px-4 py-2">Penelitian</th>
              <th class="w-1/4 border px-4 py-2">Pengabdian</th>
              <th class="w-1/4 border px-4 py-2">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="author in filteredAuthor" :key="author.id">
              <td class="border px-4 py-4">
                <div class="flex items-center justify-center">
                  <div class="flex w-20 h-20">
                    <img
                      class="w-20 h-20 object-cover absolute left-0 md:ml-24 ml-4 rounded-full"
                      alt="Foto dosen"
                      src="@/assets/content/content.png"
                    />
                  </div>
                  <div class="ml-10 items-center">
                    <p class="text-center text-lg font-semibold break-normal">
                      {{
                        `${author.gelar_depan ? author.gelar_depan : ""} ${
                          author.nama
                        }${
                          author.gelar_belakang
                            ? `, ${author.gelar_belakang}`
                            : ""
                        }`
                      }}
                    </p>
                    <p>
                      {{ author.jurusan }}
                    </p>
                    <p
                      class="text-gray-500 text-sm font-semibold tracking-wide"
                    >
                      {{ author.nidn }}
                    </p>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 border">
                <p class="text-gray-500 text-sm font-semibold tracking-wide">
                  {{ author.penelitian_count }}
                </p>
              </td>
              <td class="px-6 py-4 text-center border">
                <p class="text-gray-500 text-sm font-semibold tracking-wide">
                  {{ author.pengabdian_count }}
                </p>
              </td>
              <td class="px-6 py-4 text-center border">
                <router-link
                  :to="'/author/' + author.id"
                  class="border rounded-md hijau p-2 text-white"
                >
                  Detail
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- END Table -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "author",
  components: {},
  data() {
    return {
      searchAuthor: "",
      authors: [],
      jurusans: [],
      selectJurusan: "All",
    };
  },
  methods: {
    onChangePage(authors) {
      // update page of items
      this.authors = authors;
    },
  },
  async mounted() {
    var jurusan = "https://admin-be.repo-up2m.com/api/list-jurusan";
    axios.get(jurusan).then((x) => {
      this.jurusans = x.data.data;
    });
    const response = await axios.get(
      "https://admin-be.repo-up2m.com/api/author"
    );
    const data = response.data.data;
    this.authors = data;
    // console.log(data);
    this.total = response.data.total_data;
  },
  computed: {
    filteredAuthor() {
      var vm = this;
      var jurusan = vm.selectJurusan;

      if (jurusan === "All") {
        return vm.authors.filter((author) =>
          author.nama.toLowerCase().includes(this.searchAuthor.toLowerCase())
        );
      } else {
        return vm.authors.filter(function(author) {
          return author.jurusan === jurusan;
        });
      }
    },

    findAuthor() {
      return this.authors.filter((author) =>
        author.nama.toLowerCase().includes(this.searchAuthor.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
