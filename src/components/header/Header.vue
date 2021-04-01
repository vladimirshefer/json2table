<template>
  <div>
    <b-navbar v-show="!selectedMenu" type="light" variant="light">
      <b-navbar-brand href="#">Json2table</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item @click="selectedMenu='json'">JSON</b-nav-item>
        <b-nav-item @click="selectedMenu='table'">Table</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-navbar v-show="selectedMenu==='json'" type="light" variant="light">
      <checkbox-button hint="Back" :enabled="false" icon-name="chevron-left"
                       @click="selectedMenu=null"/>
      <b-navbar-brand>JSON</b-navbar-brand>
      <checkbox-button hint="Format JSON" :enabled="settings.indent" icon-name="text-indent-left"
                       @click="settings.indent = !settings.indent"/>
    </b-navbar>
    <b-navbar v-show="selectedMenu==='table'" type="light" variant="light">
      <checkbox-button hint="Back" :enabled="false" icon-name="chevron-left"
                       @click="selectedMenu=null"/>
      <b-navbar-brand>Table</b-navbar-brand>
      <checkbox-button hint="(Alt) Show control buttons." :enabled="settings.showControls" icon-name="wrench"
                       @click="settings.showControls = !settings.showControls"/>
    </b-navbar>
  </div>
</template>

<script>
import CheckboxButton from "./CheckboxButton";

export default {
  name: "Header",
  components: {CheckboxButton},
  props: {
    settings: {type: Object}
  },
  data() {
    return {
      selectedMenu: null
    }
  },
  mounted() {
    window.addEventListener("keydown", e => {
      if (e.keyCode === 27) {
        this.selectedMenu = null
      }
    });
  }
}
</script>

<style scoped>

</style>
