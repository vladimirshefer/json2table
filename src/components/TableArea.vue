<template>
  <div>
    <input v-if="isPrimitive" type="text" v-model="targetObject">

    <div style="position: relative;">
      <div class="controls" v-show="isCollection && showControls">
        <input type="button" value="⟳" @click="flip" title="Rotate table">
      </div>
    </div>

    <div v-if="isHorizontal">
      <div v-if="isCollection">
        <tr>
          <th v-for="(value, key) in targetObject" :key="key">{{ key }}</th>
        </tr>
        <tr>
          <td v-for="(value) in targetObject" :key="value">
            <TableArea :target-object="value"
                       :show-controls="showControls"
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
  },
  methods: {
    flip: function (){
      this.isHorizontal = !this.isHorizontal;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.controls {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
