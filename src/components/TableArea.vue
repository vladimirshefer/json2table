<template>
  <div>
    <input v-if="isPrimitive" type="text" v-model="targetValue">

    <div style="position: relative;">
      <div class="controls" v-show="isCollection && showControls">
        <input type="button" value="⟳" @click="flip" title="Rotate table">
      </div>
    </div>

    <div v-if="isHorizontal">
      <div v-if="isCollection">
        <tr>
          <th v-for="(value, key) in targetValue" :key="key">{{ key }}</th>
        </tr>
        <tr>
          <td v-for="(value) in targetValue" :key="value">
            <TableArea :target-object="value"
                       :show-controls="showControls"
            ></TableArea>
          </td>
        </tr>
      </div>
    </div>
    <div v-else>
      <div v-if="isCollection">
        <tr v-for="(value, key) in targetValue" :key="value">
          <th>{{ key }}</th>
          <td>
            <TableArea :target-object="value"
                       :show-controls="showControls"
            ></TableArea>
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
    showControls: {type: Boolean, required: false, default: true}
  },
  data() {
    return {
        isHorizontal: false
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
      set: function(argument) {
        this.targetObject.data = argument
      }
    }
  },
  methods: {
    flip: function (){
      this.isHorizontal = !this.isHorizontal;
    },
    isCollection1: function (any) {
      return typeof any === 'object' && any !== null
    }
  }
}
</script>

<style scoped>
</style>
