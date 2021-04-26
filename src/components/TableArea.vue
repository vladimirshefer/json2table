<template>
  <div>
    <span v-show="isPrimitive && !editable" @dblclick="editable = true">{{targetValue}}</span>
    <input v-show="isPrimitive && editable" type="text" @keydown.enter="editable = false" v-model="targetValue">

    <div v-if="isCollection">
      <div v-if="isHorizontal" class="d-flex">
        <div class="m-1" v-for="(value, key) in targetValue" :key="key"  style="border: 1px solid black;">
          <EntryHeader
            :entry-key="key"
            @drop="dropEntryByKey(key)"
            @flip="flip"
          />
          <TableArea :target-object="value"/>
        </div>
      </div>
      <div v-else>
        <div class="d-flex m-1" v-for="(value, key) in targetValue" :key="key" style="border: 1px solid black;">
          <EntryHeader :entry-key="key"
                       @drop="dropEntryByKey(key)"
                       @flip="flip"
          />
          <TableArea :target-object="value"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import EntryHeader from "./EntryHeader";

export default {
  name: 'TableArea',
  components: {
    EntryHeader
  },
  props: {
    targetObject: {},
  },
  data() {
    return {
      isHorizontal: false,
      editable: false,
      collapsed: false,
    }
  },
  computed: {
    isObject() {
      return !this.isArray && typeof this.targetValue === 'object' && this.targetValue !== null
    },
    isArray() {
      return Array.isArray(this.targetValue);
    },
    isCollection() {
      return this.isArray || this.isObject
    },
    isPrimitive() {
      return !this.isCollection;
    },
    targetValue: {
      get() {
        return this.targetObject.data
      },
      set: function (argument) {
        this.targetObject.data = argument
      }
    }
  },
  methods: {
    flip: function () {
      this.isHorizontal = !this.isHorizontal;
    },
    dropEntryByKey(key) {
      console.log("deleting " + key)
      if (this.isArray) {
        this.targetValue.splice(parseInt(key), 1);
      }
      if (this.isObject) {
        this.$delete(this.targetValue, key)
      }
    }
  }
}
</script>

