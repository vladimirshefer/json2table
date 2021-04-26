<template>
  <div class="m-1" :style="rootStyle" style="border: 1px solid black;">
    <EntryHeader :entry-key="entryKey"
                 @drop="$emit('drop', $event)"
                 @flip="$emit('flip', $event)"
    />

    <TableArea :target-object="value"/>
  </div>
</template>

<script>
import TableArea from "@/components/TableArea";
import EntryHeader from "@/components/EntryHeader";

export default {
  name: "Entry",
  components: {EntryHeader, TableArea},
  props: {
    rootStyle: {type: Object, required: false},
    entryKey: {required: true},
    value: {type: Object, required: true},
  },
  beforeCreate() {
    /*
     * This code is workaround for circular component dependencies problem
     * https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
     */
    this.$options.components.TableArea = require('@/components/TableArea.vue').default
  }
}
</script>

<style scoped>

</style>
