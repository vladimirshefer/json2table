<template>
  <div>
    <span v-show="!editable" @dblclick="editable = true">{{ value }}</span>
    <input v-show="editable" type="text" @keydown.enter="update" v-model="value">
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
      value: this.targetValue,
      editable: false,
    }
  },
  methods: {
    update() {
      this.editable = false
      this.$emit("update", this.value)
    }
  }
}
</script>

<style scoped>

</style>
