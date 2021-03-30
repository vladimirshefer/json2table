<template>
  <div id="app">
    <div>
      <p>
        <textarea v-model="objectText"/>
      </p>
      <p>
        <input id="showControls" type="checkbox" v-model="showControls">
        <label for="showControls">Show control buttons</label>
      </p>
      <p>
        <input id="indent" type="checkbox" v-model="indent">
        <label for="indent">Format JSON</label>
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
      showControls: false,
      indent: false
    }
  },
  computed: {
    objectText: {
      get: function () {
        return JSON.stringify(this.targetObject, (__, value) => value.data, this.indent ? 2 : null);
      },
      set: function (str) {
        this.targetObject = JSON.parse(str, (__, value) => ({data: value}))
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
textarea{
  width: 80%;
  height: auto;
}
</style>
