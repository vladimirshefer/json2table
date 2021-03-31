<template>
  <ul>
    <li v-if="history.length===0">History is empty. Use Ctrl+S to save current state.</li>
    <li v-for="revision in history" :key="revision.value">
          <span>
            {{ revision.date.getHours() + ":" + revision.date.getMinutes() + ":" + revision.date.getSeconds() }}
          </span>
      <input type="text" disabled :value="revision.value">
    </li>
  </ul>
</template>

<script>
export default {
  name: "History",
  props: {
    history: {type: Array, required: true}
  }
}
</script>

<style scoped>

</style>
