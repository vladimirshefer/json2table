<template>
  <div class="m-1" :style="rootStyle" style="border: 1px solid black;">
    <EntryHeader :entry-key="entryKey"
                 :collapse="isCollapsed"
                 @drop="$emit('drop', $event)"
                 @flip="$emit('flip', $event)"
                 @collapse="isCollapsed=!isCollapsed"
    />

    <TableArea v-show="!isCollapsed" :target-object="value"/>
    <EntryCollapsedValue v-if="isCollapsed" @show="isCollapsed=false"/>
  </div>
</template>

<script>
import TableArea from "@/components/TableArea";
import EntryHeader from "@/components/EntryHeader";
import EntryCollapsedValue from "@/components/EntryCollapsedValue";

export default {
  name: "Entry",
  components: {EntryCollapsedValue, EntryHeader, TableArea},
  props: {
    rootStyle: {type: Object, required: false},
    entryKey: {required: true},
    value: {type: Object, required: true},
  },
  data() {
    return {
      isCollapsed: false
    }
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
