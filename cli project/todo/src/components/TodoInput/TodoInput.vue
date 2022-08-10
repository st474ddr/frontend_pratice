<script>
export default {
  data() {
    return {
      todo: "",
    }
  },
  methods: {
    submitHandler() {
      if (!this.todo) {
        return
      } else {
        this.$store.commit("addTodo", { content: this.todo, completed: false })
        this.todo = ""
      }
    },
  },
}
</script>
<template src="./template.html"></template>
