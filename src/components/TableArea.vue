<template>
  <div>
    <input v-if="isPrimitive" type="text" v-model="targetObject">

    <div v-if="innerCollectionIsHorizontal">
      <div v-if="isCollection">
        <tr>
          <th v-for="(value, key) in targetObject" :key="key">{{ key }}</th>
        </tr>
        <tr>
          <td v-for="(value) in targetObject" :key="value">
            <TableArea :target-object="value"
                       :inner-collection-is-horizontal="false"
            ></TableArea>
          </td>
        </tr>
      </div>
    </div>
    <div v-else>
      <div v-if="isCollection">
        <tr v-for="(value, key) in targetObject" :key="value">
          <th>{{ key }}</th>
          <td>
            <TableArea :target-object="value"
                       :inner-collection-is-horizontal="isCollection && !innerCollectionIsHorizontal"></TableArea>
          </td>
        </tr>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TableArea',
  props: {
    targetObject: {},
    innerCollectionIsHorizontal: {type: Boolean, default: false}
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
    isCollection() {
      return this.isArray || this.isObject
    },
    isPrimitive() {
      return !this.isCollection;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
