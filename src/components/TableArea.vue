<template>
  <div>
    <EntryPrimitiveValue v-if="isPrimitive" :target-value="targetValue" @update="targetValue=$event"/>

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
import EntryPrimitiveValue from "@/components/EntryPrimitiveValue";

export default {
  name: 'TableArea',
  components: {EntryPrimitiveValue, Entry},
  props: {
    targetObject: {},
  },
  data() {
    return {
      isHorizontal: false,
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

