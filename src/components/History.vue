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
    value: {type: String}
  },
  data() {
    return {
      history: []
    }
  },
  methods: {
    pushHistory() {
      if ((this.history[0] || {}).value !== this.value) {
        this.history.unshift({
          date: new Date(),
          value: this.value
        });
      }
    }
  },
  mounted() {
    /**
     * Ctrl+S handler. This shortcut saves current document state to history.
     */
    window.addEventListener("keydown", e => {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode === 83) {
        e.preventDefault();
        this.pushHistory();
      }
    });
  }
}
</script>

<style scoped>

</style>
