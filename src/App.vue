<template>
  <div class="container-fluid" id="app">
    <div class="row header">
      <OptionToggleButton hint="Format JSON" :enabled="indent" icon-name="text-indent-left"
                          text="Format"
                          @click="indent = !indent"/>
      <OptionToggleButton hint="Show JSON" :enabled="shownElements.json" icon-name="file-text"
                          text="JSON"
                          @click="shownElements.json = !shownElements.json"/>
      <OptionToggleButton hint="Show table" :enabled="shownElements.table" icon-name="table"
                          text="Table"
                          @click="shownElements.table = !shownElements.table"/>
    </div>
    <div class="row">
      <div v-show="shownElements.json" class="col-12 col-lg">
        <textarea v-model="objectText"/>
        <p>
          Insert your JSON here (or use <a href="/?randomJson=true">random JSON</a>).
        </p>
        <p>
          You can change values in table. All changes will be applied to this JSON.
        </p>
      </div>
      <div v-show="shownElements.table" id="table" class="col-12 col-lg">
        <div v-show="objectText" class="d-flex">
          <TableArea :target-object="targetObject"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12" id="history">
        <History :value="objectText"/>
      </div>
    </div>
    <div class="row footer">
      <div class="col-12">
        Author: <a href="https://github.com/vladimirshefer" target="_blank">Vladimir Shefer</a>.
        Source code on <a href="https://github.com/vladimirshefer/json2table" target="_blank">GitHub</a>.
      </div>
    </div>
  </div>
</template>

<script>
import TableArea from '@/components/TableArea'
import axios from "axios"
import History from "@/components/History";
import OptionToggleButton from "@/components/OptionToggleButton";

export default {
  name: 'App',
  components: {
    OptionToggleButton,
    History,
    TableArea
  },
  data() {
    return {
      targetObject: {data: null},
      indent: true,
      history: [],
      shownElements: {
        json: true,
        table: true,
      }
    }
  },
  computed: {
    objectText: {
      get: function () {
        return JSON.stringify(this.targetObject, (__, value) => value.data, this.indent ? 2 : null);
      },
      set: function (str) {
        this.targetObject = JSON.parse(str, (__, value) => ({data: value}))
      }
    }
  },
  methods: {
    loadRandomJson() {
      axios
          .get('https://randomuser.me/api/', {transformResponse: (r) => r})
          .then(response => {
            this.objectText = response.data
          });
    },
  },
  mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("randomJson")) {
      this.loadRandomJson();
    }
  }
}
</script>

<style>
@import './assets/styles/main.css';
</style>

<style scoped>
.header { /* TODO temporary solution. remove after bootstrap nav applied*/
    padding: 10px;
}

.header > * {
    margin-right: 10px;
}
</style>
