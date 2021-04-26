<template>
  <div>
    <span v-show="!editable" @dblclick="editable = true">{{ targetValue }}</span>
    <input v-show="editable" type="text" @keydown.enter="editable = false" v-model="targetValue">
  </div>
</template>

<script>
export default {
  name: "EntryValuePrimitive",
  props: {
    targetValue: {required: true}
  },
  data() {
    return {
      editable: false
    }
  }
}
</script>

<style scoped>

</style>
