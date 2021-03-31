<template>
  <div>
    <p v-if="history.length===0">
      History is empty. Use Ctrl+S to save current state.
    </p>
    <p v-if="noChangesDetected">
      All changes are saved...
    </p>

    <ul>
      <li v-for="revision in history" :key="revision.value">
      <span>
        {{ revision.date.getHours() + ":" + revision.date.getMinutes() + ":" + revision.date.getSeconds() }}
      </span>
        <input type="text" disabled :value="revision.value">
      </li>
    </ul>
  </div>
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
  computed: {
    noChangesDetected() {
      let emptyValue = this.value == "";
      let valueIsInHistory = this.history.length !== 0 && this.history[0].value === this.value;
      return emptyValue || valueIsInHistory
    }
  },
  methods: {
    pushHistory() {
      if (!this.noChangesDetected) {
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
