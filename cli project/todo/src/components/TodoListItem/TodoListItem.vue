<script>
export default {
  data() {
    return {
      editData: null,
    }
  },
  props: {
    itemIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    todo() {
      return this.$store.state.todos[this.itemIndex]
    },
    checkComplete: {
      get() {
        return this.todo.completed
      },
      set(val) {
        this.$store.commit("updateTodo", {
          index: this.itemIndex,
          data: {
            content: this.todo.content,
            completed: val,
          },
        })
      },
    },
  },
  methods: {
    destroyHandler() {
      if (confirm(`確定要刪除${this.todo.content}嗎?`)) {
        this.$store.commit("removeTodo", this.itemIndex)
      }
    },
    editHandler() {
      this.editData = this.todo.content
      // 單純暫存用 不用宣告
      this.cahce = this.todo.content
    },
    submitHandler() {
      if (!this.editData) this.destroyHandler()
      this.$store.commit("updateTodo", {
        index: this.itemIndex,
        data: {
          content: this.editData,
          completed: this.todo.completed,
        },
      })
      this.cancelHandler()
    },
    cancelHandler() {
      this.editData = null
    },
  },
}
</script>
<template src="./template.html"></template>
