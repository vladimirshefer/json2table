<template>
  <div>
    <span v-show="!editable" @dblclick="editingStart">{{ value }}</span>
    <input v-show="editable" type="text" @keydown.enter="update" v-model="value">
  </div>
</template>

<script>
export default {
  name: "EntryPrimitiveValue",
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
    editingStart() {
      this.editable = true
    },
    update() {
      this.editable = false
      this.$emit("update", this.value)
    }
  }
}
</script>

<style scoped>

</style>
