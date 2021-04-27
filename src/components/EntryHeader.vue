<template>
  <div tabindex="0" @keypress.delete="tryDrop" class="m-1 d-flex">
    <b>{{ entryKey }}</b>
    <div>
      <b-dropdown variant="custom" size="sm">

        <b-dropdown-item @click="$emit('editing-start')">
          <b-icon icon="pencil"/>
          {{ "Редактировать" }}
        </b-dropdown-item>

        <b-dropdown-divider/>

        <b-dropdown-item @click="toggleCollapse">
          <b-icon :icon="collapse ? 'arrows-expand' : 'arrows-collapse'"/>
          {{ collapse ? "Развернуть" : "Свернуть" }}
        </b-dropdown-item>

        <b-dropdown-item @click="$emit('flip')">
          <b-icon icon="arrow-clockwise"/>
          Повернуть
        </b-dropdown-item>

        <b-dropdown-divider/>

        <b-dropdown-item @click="tryDrop">
          <b-icon icon="x"/>
          Удалить
        </b-dropdown-item>

      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EntryHeader',
    props: {
        entryKey: {required: true},
        collapse: {},
    },
    data() {
        return {
          fontSizeScale: 1.0,
        }
    },
    methods: {
        tryDrop() {
            if (confirm("Удалить элемент?")) {
                this.$emit("drop")
            }
        },
        toggleCollapse() {
            this.$emit("collapse")
        },
    }
}
</script>

<style scoped>
a.entry-drop-button {
    cursor: pointer;
    color: gray;
}

th {
    /*display: flex;*/
}
</style>
