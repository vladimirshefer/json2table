<template>
  <div id="app">
    <div>
      <p>
        <input type="text" v-model="objectText">
      </p>
      <p>
        <input id="showControls" type="checkbox" v-model="showControls">
        <label for="showControls">Show control buttons</label>
      </p>
    </div>
    <div>
      <table border="1">
        <TableArea :target-object="targetObject"
                   :show-controls="showControls"
        ></TableArea>
      </table>
    </div>
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
      targetObject: ["no data"],
      showControls: false
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
