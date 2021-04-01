<template>
  <b-button
      :title="hint"
      :variant="enabled?'primary':'primary-outlined'"
      :size="size"
      @click="$emit('click')"
  >
    <b-icon :icon="iconName"/>
  </b-button>
</template>

<script>
export default {
  name: "CheckboxButton",
  props: {
    iconName: {type: String},
    hint: {type: String},
    enabled: {type: Boolean},
    size: {type: String, default: ""}
  }
}
</script>

<style scoped>

</style>
