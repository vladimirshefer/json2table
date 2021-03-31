<template>
  <b-button
      :title="hint"
      :variant="enabled?'primary':'primary-outlined'"
      @click="$emit('click')"
  >
    <b-icon :icon="iconName"/>
  </b-button>
</template>

<script>
export default {
  name: "OptionToggleButton",
  props: {
    iconName: {type: String},
    hint: {type: String},
    enabled: {type: Boolean}
  }
}
</script>

<style scoped>

</style>
