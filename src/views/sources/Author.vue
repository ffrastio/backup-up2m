<template>
  <div id="author">
    <div class="border-b">
      <div class="container flex px-4">
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
        <div class="hidden md:flex items-center mx-auto ml-4">
          <div
            class="block items-center justify-items-center border transform duration-500 transition hover:scale-110 "
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mx-auto mt-4"
              style="height: 50px"
            />
            <div class="px-4 mb-2"><p>Informatika & Komputer</p></div>
          </div>
          <div
            class="block items-center justify-items-center border transform duration-500 transition hover:scale-110"
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mx-auto mt-4"
              style="height: 50px"
            />
            <div class="px-4 mb-2"><p>Teknik Mesin</p></div>
          </div>
          <div
            class="block items-center justify-items-center border transform duration-500 transition hover:scale-110"
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mx-auto mt-4"
              style="height: 50px"
            />
            <div class="px-4 mb-2"><p>Administrasi Niaga</p></div>
          </div>
          <div
            class="block items-center justify-items-center border transform duration-500 transition hover:scale-110"
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mx-auto mt-4"
              style="height: 50px"
            />
            <div class="px-4 mb-2"><p>Teknik Sipil</p></div>
          </div>
          <div
            class="block items-center justify-items-center border transform duration-500 transition hover:scale-110"
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mx-auto mt-4"
              style="height: 50px"
            />
            <div class="px-4 mb-2"><p>Akutansi</p></div>
          </div>
          <div
            class="block items-center justify-items-center border transform duration-500 transition hover:scale-110"
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mx-auto mt-4"
              style="height: 50px"
            />
            <div class="px-4 mb-2"><p>Grafika & Penerbitan</p></div>
          </div>
          <div
            class="block items-center justify-items-center border transform duration-500 transition hover:scale-110"
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mx-auto mt-4"
              style="height: 50px"
            />
            <div class="px-4 mb-2"><p>Pascasarjana</p></div>
          </div>
          <div
            class="block items-center justify-items-center border transform duration-500 transition hover:scale-110"
          >
            <img
              src="@/assets/content/content.png"
              alt="logoPnj"
              class="object-cover mx-auto mt-4"
              style="height: 50px"
            />
            <div class="px-4 mb-2"><p>Teknik Elektro</p></div>
          </div>
        </div>
        <!-- END Jurusan Kategori Dekstop -->
        <!-- START Jurusan Kategori Mobile -->
        <div class="items-center justify-center overflow-x-auto lg:hidden">
          <select
            class="dropdown border-2 rounded-xl border-primary px-1 py-1 mt-3 ml-6 w-40"
            id="dd"
          >
            <option value="" selected="selected">Semua Jurusan</option>
            <option value="dps3">Administrasi Niaga</option>
            <option value="dps4">Akutansi</option>
            <option value="dps2">Teknik Elektro</option>
            <option value="dps5">Teknik Grafika & Penerbitan</option>
            <option value="dps1">Teknik Informatika & Komputer</option>
            <option value="dps5">Teknik Mesin</option>
            <option value="dps5">Pascasarjana</option>
            <option value="dps5">Teknik Sipil</option>
          </select>
        </div>
        <!-- END Jurusan Kategori Mobile -->
      </div>
    </div>
    <!-- START Search Author -->
    <div class="container mx-auto px-4 py-4 text-left flex items-center justify-between">
      <input
        type="text"
        v-model="search"
        placeholder="Search Author . . ."
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
        @keyup="searchAuthor"
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
            <tr v-for="author in authors" :key="author.id">
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
                  <div class="items-center">
                    <p class="text-center text-lg font-semibold">
                      {{ author.gelar_depan }} {{ author.nama }}
                      {{ author.gelar_belakang }}
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
      search: "",
      authors: [],
      total: null
    };
  },
  methods: {
    searchAuthor() {
      axios
        .get("http://admin-be.repo-up2m.com/api/list-author?q=" + this.search)
        .then((res) => (this.authors = res.data.data.data))
        .catch((err) => console.log(err));
    },
  },
  async mounted() {
    const response = await axios.get("http://admin-be.repo-up2m.com/api/author");
    this.authors = response.data.data;
  },
};
</script>

<style lang="scss" scoped></style>
