<template>
  <div tabindex="0" @keypress.delete="tryDrop" class="m-1 d-flex">
    <b>{{ entryKey }}</b>
    <div>
      <b-dropdown variant="light" size="sm">
        <b-dropdown-item @click="toggleCollapse">Свернуть</b-dropdown-item>
        <b-dropdown-item @click="flip">Повернуть</b-dropdown-item>
        <b-dropdown-item @click="tryDrop">Удалить</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EntryHeader',
    props: {
        entryKey: {required: true},
        collapse: {type: Boolean},
    },
    data() {
        return {
            fontSizeScale: 1.0
        }
    },
    methods: {
        tryDrop() {
            if (confirm("Удалить элемент?")) {
                this.$emit("drop")
            }
        },
        toggleCollapse() {
            this.collapse = !this.collapse
            this.$emit("collapse")
        },
        flip() {
            this.$emit("flip")
        }
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
