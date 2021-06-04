<template>
  <div>
    <BarChart :chart-data="datacollection" />
  </div>
</template>

<script>
import BarChart from "./TestingBar.js";
import axios from "axios";
export default {
  components: {
    BarChart,
  },
  data() {
    return {
      datacollection: null,
      loaded: false,
      age: [],
      salary: [],
      employee: [],
    };
  },
  async mounted() {
    this.fillData();
    await this.getPenelitian();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.name,
        datasets: [
          {
            label: "Age",
            backgroundColor: "blue",
            data: this.age,
          },
          {
            label: "Salary",
            backgroundColor: "red",
            data: this.salary,
          },
        ],
      };
    },
    getPenelitian() {
      var url = "http://dummy.restapiexample.com/api/v1/employees";
      // var headers = {
      //   headers: {
      //   }
      // }
      axios
        .get(url)
        .then((x) => {
          // console.log(x.data.data)
          var results = x.data.data;
          var salary = [];
          var age = [];
          var name = [];
          for (var i = 23; i >= 0; i--) {
            var a = parseInt(results[i].employee_age);
            var s = parseInt(results[i].employee_salary);
            var n = results[i].employee_name;
            salary.push(s);
            age.push(a);
            name.push(n);
          }
          this.salary = salary
          this.age = age
          this.name = name
          this.fillData()
        })
        .catch(() => {
          console.log("Data tidak berhasil di panggil :v");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
