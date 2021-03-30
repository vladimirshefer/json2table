<template>
  <div id="app">
    <input type="text" v-model="objectText">
    <table border="1">
      <TableArea :target-object="targetObject"></TableArea>
    </table>
  </div>
</template>

<script>
import TableArea from './components/TableArea.vue'
import axios from "axios"

export default {
  name: 'App',
  components: {
    TableArea
  },
  data() {
    return {
      targetObject: ["no data"]
    }
  },
  computed: {
    objectText: {
      get: function () {
        return JSON.stringify(this.targetObject);
      },
      set: function (str) {
        this.targetObject = JSON.parse(str)
      }
    }
  },
  mounted: function () {
    axios
        .get('https://randomuser.me/api/', { transformResponse: (r) => r })
        .then(response => {
          this.objectText = response.data
        });
  }
}
</script>

<style scoped>
</style>
