<template>
  <div id="authorDetail">
    <div class="container py-4">
      <p>
        {{
          `${detailAuthor.gelar_depan ? detailAuthor.gelar_depan : ""} ${
            detailAuthor.nama
          }${
            detailAuthor.gelar_belakang
              ? `, ${detailAuthor.gelar_belakang}`
              : ""
          }`
        }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jurusan: [],
      detailAuthor: [],
    };
  },
  // methods:{

  // },

  mounted() {
    axios
      .get("https://admin-be.repo-up2m.com/api/list-author", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => (this.detailAuthor = res.data.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped></style>
