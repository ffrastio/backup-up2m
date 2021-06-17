<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3  border-b"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"
      >
        <a href="/">
          <img
            src="@/assets/img/logo.png"
            alt="Logo UP2M"
            class="object-cover md:justify-between h-12"
          />
        </a>
        <button
          class=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <font-awesome-icon icon="bars" />
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex  justify-between items-center mt-2"
      >
        <ul
          class="flex flex-col lg:flex-row list-none justify-end items-center"
        >
          <li class="nav-item">
            <router-link
              to="/"
              class=" hover:bg-primary hover:text-white px-4 py-2  rounded "
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'About' }"
              class=" hover:bg-primary hover:text-white px-4 py-2 flex items-center rounded "
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Author' }"
              class=" hover:bg-primary hover:text-white px-4 py-2 flex items-center rounded "
              >Authors</router-link
            >
          </li>
          <div>
            <b-dropdown
              id="dropdown-buttons"
              text="Sources"
              class="m-2 "
              variant="transparent"
            >
              <b-dropdown-item
                class=" border-b  py-2 px-4 block whitespace-no-wrap"
                ><router-link :to="{ name: 'Penelitian' }"
                  >Penelitian</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                class=" py-2 px-4 block whitespace-no-wrap"
                ><router-link :to="{ name: 'Pengabdian' }"
                  >Pengabdian Masyarakat</router-link
                ></b-dropdown-item
              >
            </b-dropdown>
          </div>
          <div class="lg:ml-12">
            <router-link
              v-if="!userLogin"
              :to="{ name: 'Login' }"
              class="border rounded-md border-hijau items-center hover:bg-primary  hover:text-white px-4 py-2"
              >Masuk
            </router-link>
            <a
              href="javascript:;"
              v-else
              @click="logout"
              class="border rounded-md border-hijau items-center hover:bg-primary  hover:text-white px-4 py-2"
              >Logout
            </a>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
      userLogin: this.$cookies.get("uid"),
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    },
    logout: function() {
      this.$cookies.remove("uid");
      window.location = "/";
    },
  },
};
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
.hijau {
  color: #008797;
}
</style>
