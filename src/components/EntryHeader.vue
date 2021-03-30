<template>
  <div>
    <th tabindex="0" @focus="showControls=true" @focusout="showControls=false" @keypress.delete="tryDrop">
      {{ entryKey }}
      <div class="entry-controls" v-show="showControls">
        <a class="entry-drop-button" title="Drop this entry. Double click to proceed."
           @click="tryDrop"
           @mouseout="wantToDrop = false"
        >{{ wantToDrop ? "✓" : "✗" }}</a>
      </div>
    </th>
  </div>
</template>

<script>
export default {
  name: 'EntryHeader',
  props: {
    entryKey: {required: true},
  },
  data() {
    return {
      wantToDrop: false,
      showControls: false
    }
  },
  methods: {
    tryDrop() {
      if (this.wantToDrop) {
        this.$emit("drop")
      } else {
        this.wantToDrop = true
      }
    }
  }
}
</script>

<style scoped>
a.entry-drop-button {
  cursor: pointer;
  color: gray;
}

th div.entry-controls {
  display: inline;
}
</style>
