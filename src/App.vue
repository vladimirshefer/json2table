<template>
  <div id="app">
    <div>
      <p>
        Insert your JSON here (or use <a href="/json2table/?randomJson=true">random JSON</a>):
        <br/>
        <textarea v-model="objectText"/>
        <br/>
        You can change values in table. All changes will be applied to this JSON.
      </p>
      <p>
        <input id="showControls" type="checkbox" v-model="showControls">
        <label for="showControls">(Alt) Show control buttons.</label>
      </p>
      <p>
        <input id="indent" type="checkbox" v-model="indent">
        <label for="indent">Format JSON</label>
      </p>
    </div>
    <div>
      <table border="1">
        <TableArea :target-object="targetObject"
                   :show-controls="showControls"
        ></TableArea>
      </table>
    </div>
    <History :history="history"/>
    <div class="footer">
      <hr>
      Author: <a href="https://github.com/vladimirshefer">Vladimir Shefer</a>. Source code on <a href="https://github.com/vladimirshefer/json2table">GitHub</a>.
    </div>
  </div>
</template>

<script>
import TableArea from './components/TableArea.vue'
import axios from "axios"
import History from "./components/History";

export default {
  name: 'App',
  components: {
    History,
    TableArea
  },
  data() {
    return {
      targetObject: ["no data"],
      showControls: false,
      indent: false,
      history: []
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
    pushHistory() {
      let objectText = this.objectText;
      if ((this.history[0] || {}).value !== objectText) {
        this.history.unshift({
          date: new Date(),
          value: objectText
        });
      }
    }
  },
  mounted() {
    /**
     * Ctrl+S handler. This shortcut saves current document state to history.
     */
    window.addEventListener("keydown", e => {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
        e.preventDefault();
        this.pushHistory();
      }
    });
    window.addEventListener("keydown", e => {
      if (e.altKey) {
        this.showControls = true
      }
    });
    window.addEventListener("keyup", e => {
      if (!e.altKey) {
        this.showControls = false
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
</style>
