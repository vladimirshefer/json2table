<template>
  <div>
    <input v-if="isPrimitive" type="text" v-model="targetObject">

    <tr v-for="(arrayLine, index) in getAsArrayOrEmpty" :key="arrayLine">
      <th>{{ index }}</th>
      <td>
        <TableArea :target-object="arrayLine"></TableArea>
      </td>
    </tr>

    <tr v-for="(value, key) in getAsObjectOrEmpty" :key="value">
      <th>{{ key }}</th>
      <td>
        <TableArea :target-object="value"></TableArea>
      </td>
    </tr>

  </div>
</template>

<script>
export default {
  name: 'TableArea',
  props: {
    targetObject: {}
  },
  data() {
    return {}
  },
  computed: {
    isObject() {
      return !this.isArray && typeof this.targetObject === 'object' && this.targetObject !== null
    },
    isArray() {
      return Array.isArray(this.targetObject);
    },
    isPrimitive() {
      return !this.isObject && !this.isArray;
    },
    getAsArrayOrEmpty() {
      if (this.isArray) {
        return this.targetObject
      } else {
        return [];
      }
    },
    getAsObjectOrEmpty() {
      if (this.isObject) {
        return this.targetObject
      } else {
        return {};
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
