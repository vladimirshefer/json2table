<template>
  <div>
    <div>
      <span v-show="isPrimitive && !editable" @dblclick="editable = true">{{ targetValue }}</span>
      <input v-show="isPrimitive && editable" type="text" @keydown.enter="editable = false" v-model="targetValue">
    </div>

    <div v-if="isCollection">
      <div :style="isHorizontal ? { display: 'flex' }  : { display:'block' }">
        <Entry
          v-for="(value, key) in targetValue" :key="key"
          :entry-key="key"
          :value="value"
          :style="isHorizontal ? { display: 'block' }  : { display:'flex' }"
          @drop="dropEntryByKey(key)"
          @flip="flip"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Entry from "@/components/Entry";

export default {
  name: 'TableArea',
  components: {Entry},
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

