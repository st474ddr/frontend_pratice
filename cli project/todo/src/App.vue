<template>
  <div id="app">
    <nav>
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/completed">已完成</router-link>
      <TodoInput />
      <div id="list">
        <TodoListItem
          v-for="index in todoIndex"
          :key="index"
          :itemIndex="index"
        />
      </div>
    </nav>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput/TodoInput.vue"
import TodoListItem from "@/components/TodoListItem/TodoListItem.vue"

export default {
  components: {
    TodoInput,
    TodoListItem,
  },
  computed: {
    todoIndex() {
      return this.$store.getters["todoIndex"]
    },
  },
  mounted() {
    this.$store.dispatch("initTodos")
  },
}
</script>

<style>
html {
  color: #34495e;
  background-color: #41b883;
  font-family: "微軟正黑體";
}

#app {
  text-align: center;
  margin-top: 60px;
}

nav {
  color: white;
  padding: 20px;
  font-weight: 800;
}

nav a {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: #34495e;
  background: #ffffff;
}

#list {
  list-style: none;
  padding: 0;
}

.todoInput {
  margin: 20px auto;
}

.todoInput input {
  font-size: 20px;
  font-weight: 400;
  border: none;
  max-width: 600px;
  padding: 10px 10px;
  width: 100%;
  border-radius: 5px;
  outline: none;
}

.todoListItem {
  position: relative;
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
  height: 40px;
  line-height: 40px;
  background-color: white;
  border-radius: 5px;
  margin: 5px auto;
  padding: 20px 10px;
}

.todoListItem .toggle {
  position: absolute;
  text-align: center;
  height: 40px;
  top: 0px;
  left: 0px;
  bottom: 0;
  margin: auto 10px;
  border: none;
  cursor: pointer;
}

.todoListItem .toggle + label {
  background-repeat: no-repeat;
  background-position: center left;
}

.todoListItem .toggle:checked + label {
  color: #d9d9d9;
  text-decoration: line-through;
}

.todoListItem label {
  color: #34495e;
  font-size: 20px;
  word-break: break-all;
  padding: 0px 15px 0px 60px;
  height: 40px;
  display: block;
  line-height: 40px;
  transition: color 0.4s;
}

.todoListItem .edit {
  font-size: 20px;
  text-align: left;
  width: calc(100% - 40px);
  word-break: break-all;
  padding: 0 10px;
  margin: 0 auto;
  height: 40px;
  display: block;
  line-height: 40px;
  outline: none;
}

.todoListItem .destroy {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin: auto 10px;
  font-size: 30px;
  color: #af5b5e;
}

.todoListItem .destroy::after {
  content: "x";
}
</style>
