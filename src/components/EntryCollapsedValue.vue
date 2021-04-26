<template>
  <div class="m-1 p-1" @click="$emit('show')" style="cursor: pointer; border: 1px solid black; background-color: #f0f0f0">
    <b-icon icon="eye-slash"></b-icon>
  </div>
</template>

<script>
export default {
  name: "EntryCollapsedValue"
}
</script>

<style scoped>

</style>
