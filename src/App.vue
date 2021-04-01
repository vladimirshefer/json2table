<template>
  <div class="container-fluid" id="app">
    <Header :settings="headerSettings"/>
    <div class="row header">
    </div>
    <div class="row">
      <div class="col-4">
        <textarea v-model="objectText"/>
        <p>
          Insert your JSON here (or use <a href="/json2table/?randomJson=true">random JSON</a>).
        </p>
        <p>
          You can change values in table. All changes will be applied to this JSON.
        </p>
      </div>
      <div id="table" class="col-8">
        <table v-show="objectText" border="1">
          <TableArea :target-object="targetObject"
                     :show-controls="headerSettings.showControls"
          />
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12" id="history">
        <History :value="objectText"/>
      </div>
    </div>
    <div class="row footer">
      <div class="col-12">
        Author: <a href="https://github.com/vladimirshefer">Vladimir Shefer</a>.
        Source code on <a href="https://github.com/vladimirshefer/json2table">GitHub</a>.
      </div>
    </div>
  </div>
</template>

<script>
import TableArea from './components/TableArea.vue'
import axios from "axios"
import History from "./components/History";
import Header from "./components/header/Header";

export default {
  name: 'App',
  components: {
    Header,
    History,
    TableArea
  },
  data() {
    return {
      targetObject: {data: null},
      history: [],
      headerSettings: {
        showControls: false,
        indent: false
      }
    }
  },
  computed: {
    objectText: {
      get: function () {
        return JSON.stringify(this.targetObject, (__, value) => value.data, this.headerSettings.indent ? 2 : null);
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
    window.addEventListener("keydown", e => {
      if (e.altKey) {
        this.headerSettings.showControls = true
      }
    });
    window.addEventListener("keyup", e => {
      if (!e.altKey) {
        this.headerSettings.showControls = false
      }
    });

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
</style>
