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

export default {
  name: 'App',
  components: {
    TableArea
  },
  data() {
    return {
      targetObject: [
        {
          a1: "v1",
          a2: "v2",
          a3: "v3"
        }
      ]
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
  }
}
</script>

<style scoped>
</style>
