<template>
  <div id="penelitian">
    <div class="hijau">
      <div class="flex items-center px-4 py-4 container mx-auto">
        <h1 class="text-white font-bold text-2xl text-left">
          Pengabdian
        </h1>
      </div>
    </div>
    <!-- START Table -->
    <div class="animated fadeIn container overflow-x-auto">
      <b-row>
        <b-col sm="12" lg="12">
          <b-form-group label-cols-sm="3" label="Filter" class="py-4">
            <b-input-group>
              <b-form-input
                v-model="filter"
                placeholder="Pencarian Data . . . "
              ></b-form-input>
              <b-input-group-append>
                <b-button v-show="filter.length > 0" @click="filter = ''"
                  >X</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-table
            id="myTable"
            :busy.sync="isBusy"
            :items="ListAuthor"
            :fields="fields"
            :currentPage="currentPage"
            :per-page="perPage"
            bordered
            striped
            small
            :filter="filter"
          >
          </b-table>
        </b-col>
      </b-row>
      <div class="lg:flex md:block items-center justify-between py-4">
        <div>
          <p class="text-xl text-left">Total : {{ totalRows }} Data</p>
        </div>
        <div>
          <b-row>
            <b-col md="6" class="md:py-4 justify-center">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                first-text="First"
                prev-text="<"
                next-text=">"
                last-text="Last"
              ></b-pagination>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <!-- ENDS Table -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pengabdian",
  components: {},
  data() {
    return {
      items: [],
      filter: "",
      fields: [
        { key: "judul", sortable: false },
        { key: "skim_pengabdian", sortable: false },
        { key: "nama_ketua_pengabdian", sortable: false },
        { key: "tahun", sortable: false },
      ],
      isBusy: false,
      totalRows: 1,
      currentPage: 1,
      perPage: 15,
    };
  },
  methods: {
    ListAuthor(ctx) {
      if (ctx.filter != "") {
        var items = [];
        this.items.filter((value) => {
          if (
            value.judul.toLowerCase().indexOf(ctx.filter.toLowerCase()) > -1
          ) {
            items.push(value);
          }
        });

        if (items.length > 0) {
          console.log(items);
          return items;
        } else {
          return [];
        }
      } else {
        this.isBusy = true;
        let promise = axios.get(
          "https://admin-be.repo-up2m.com/api/list-pengabdian?page=" +
            ctx.currentPage
        );
        return promise
          .then((res) => {
            var items = res.data.data.data;
            this.items = res.data.data.data;
            this.currentPage = res.data.data.current_page;
            this.totalRows = res.data.data.total;
            this.isBusy = false;
            return items;
          })
          .catch((error) => {
            this.isBusy = false;
            return error;
          });
      }
    },
  },
};
</script>

<style scoped>
.hijau {
  background: #008797;
}
</style>
