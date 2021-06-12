<template>
  <div id="author">
    <div class="border-b">
      <div class="container mx-auto flex px-4 break-normal">
        <!-- START Author -->
        <div class="flex mx-auto items-center">
          <div class="flex items-center ">
            <div class="block items center mr-4">
              <h1 class="font-semibold block text-2xl">Authors</h1>
              <p>Total : {{ authors.length }}</p>
            </div>
            <font-awesome-icon icon="users" size="2x" />
          </div>
        </div>
        <!-- END Author -->
        <!-- START Jurusan Kategori dekstop -->
        <div
          class="hidden md:flex mx-auto "
          v-for="jurusan in jurusans"
          :key="jurusan.id"
        >
          <div
            class="block items-center w-36 justify-items-center transform duration-500 transition hover:scale-110 "
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mt-4 mx-auto"
              style="height: 50px"
            />
            <div class="mb-2">
              <p>{{ jurusan.nama_jurusan }}</p>
            </div>
          </div>
        </div>
        <!-- END Jurusan Kategori Dekstop -->
        <!-- START Jurusan Kategori Mobile -->
        <div class="items-center justify-center overflow-x-auto lg:hidden">
          <select
            class="dropdown border-2 rounded-xl border-primary px-1 py-1 mt-3 ml-6 w-40"
            v-model="selectJurusan"
          >
            <option value="All" selected="selected">Semua Jurusan</option>
            <option value="ADMINISTRASI NIAGA">Administrasi Niaga</option>
            <option value="AKUTANSI">Akutansi</option>
            <option value="TEKNIK ELEKTRO">Teknik Elektro</option>
            <option value="TEKNIK GRAFIKA DAN PENERBITAN"
              >Teknik Grafika & Penerbitan</option
            >
            <option value="TEKNIK INFORMATIKA DAN KOMPUTER"
              >Teknik Informatika & Komputer</option
            >
            <option value="TEKNIK MESIN">Teknik Mesin</option>
            <option value="TEKNIK SIPIL">Teknik Sipil</option>
          </select>
        </div>
        <!-- END Jurusan Kategori Mobile -->
      </div>
    </div>
    <!-- START Search Author -->
    <div
      class="container mx-auto px-4 py-4 text-left flex items-center justify-between"
    >
      <input
        type="text"
        v-model="searchAuthor"
        placeholder="Search Author . . ."
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
      />
    </div>
    <!-- END Search Author -->
    <div class=" flex items-center ">
      <div class="overflow-x-auto w-full">
        <!-- START Table -->
        <table class="min-h-screen container mx-auto relative">
          <thead>
            <tr>
              <th class="w-1/2 border px-4 py-2">Author</th>
              <th class="w-1/4 border px-4 py-2">Penelitian</th>
              <th class="w-1/4 border px-4 py-2">Pengabdian</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="author in authors"
              :key="author.id"
              :currentPage="currentPage"
              :pageSize="pageSize"
            >
              <td class="border px-6 py-4">
                <div class="flex items-center justify-center">
                  <div class="flex w-20 h-20">
                    <!-- <img
                      class="w-20 h-20 object-cover absolute left-0 px-4 py-6 rounded-full"
                      alt="Foto dosen"
                      :src="author.avatar"
                    /> -->
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
      currentPage: 0,
      pageSize: 10,
      visibleAuthors: [],
      selectJurusan: "",
    };
  },
  methods: {
    // searchAuthor() {
    //   axios
    //     .get("http://admin-be.repo-up2m.com/api/list-author?q=" + this.search)
    //     .then((res) => (this.authors = res.data.data.data))
    //     .catch((err) => console.log(err));
    // },
    updatePages(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleAuthors;
    },
  },
  async mounted() {
    var jurusan = "http://admin-be.repo-up2m.com/api/list-jurusan";
    axios.get(jurusan).then((x) => {
      this.jurusans = x.data.data;
    });
    const response = await axios.get(
      "http://admin-be.repo-up2m.com/api/author"
    );
    this.authors = response.data.data;
  },
  computed: {
    filteredAuthor() {
      return this.authors.filter((author) =>
        author.nama.toLowerCase().includes(this.searchAuthor.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
