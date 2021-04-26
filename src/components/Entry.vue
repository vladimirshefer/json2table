<template>
  <div class="m-1" :style="rootStyle" style="border: 1px solid black;">
    <EntryHeader :entry-key="entryKey"
                 :collapse="isCollapsed"
                 @drop="$emit('drop', $event)"
                 @flip="flip"
                 @collapse="isCollapsed=!isCollapsed"
    />

    <TableArea v-show="!isCollapsed" :target-object="value" :is-horizontal="isHorizontal"/>
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
      isCollapsed: false,
      isHorizontal: false,
    }
  },
  methods: {
    flip() {
      this.isHorizontal = !this.isHorizontal
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
