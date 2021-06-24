<template>
  <div id="authorDetail">
    <div class="container py-4">
      <p>
        {{
          `${detailAuthor.gelar_depan ? detailAuthor.gelar_depan : ""} ${detailAuthor.nama}${
            detailAuthor.gelar_belakang ? `, ${detailAuthor.gelar_belakang}` : ""
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
      idAuthor: this.$route.params.id,
    };
  },
  // methods:{

  // },
  async mounted() {
    // var jurusan = "https://admin-be.repo-up2m.com/api/list-jurusan";
    // axios.get(jurusan).then((x) => {
    //   this.jurusans = x.data.data;
    // });
    const response = await axios.get(
      "https://admin-be.repo-up2m.com/api/author",
      {
        params: {
          idAuthor: this.$route.params.id,
        },
      }
    );
    const data = response.data.data;
    this.detailAuthor = data;
    console.log(data);
  },
};
</script>

<style lang="scss" scoped></style>
