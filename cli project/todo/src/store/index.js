import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 建立 localStorage
const LS = {
  load() {
    return JSON.parse(localStorage.getItem("todo")) || []
  },
  save(data) {
    localStorage.setItem("todo", JSON.stringify(data))
  },
}

const filter = {
  all(todos) {
    return todos
  },
  active(todos) {
    return todos.filter((todo) => !todo.completed)
  },
  completed(todos) {
    return todos.filter((todo) => todo.completed)
  },
}

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [
      {
        content: "todo-content",
        completed: false,
      },
      {
        content: "todo-content",
        completed: true,
      },
      {
        content: "todo-content",
        completed: false,
      },
    ],
  },
  getters: {
    todoIndex(state) {
      return filter[state.route.name](state.todos).map((todo) =>
        state.todos.indexOf(todo)
      )
    },
  },
  mutations: {
    setTodo(state, data) {
      // 存入 localStorage
      state.todos = data
      LS.save(state.todos)
    },
    addTodo(state, data) {
      state.todos.push(data)
      LS.save(state.todos)
    },
    updateTodo(state, { index, data }) {
      // 由於 state.todos[index] 此物件並沒有改變，改變的是其屬性，所以observer不會被觸發，導致畫面不會更新。
      // state.todos[index] = data
      state.todos[index].completed = data.completed
      state.todos[index].content = data.content
      LS.save(state.todos)
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1)
      LS.save(state.todos)
    },
  },
  actions: {
    initTodos({ commit }) {
      // 讀取 localStorage
      commit("setTodo", LS.load())
    },
  },
  modules: {},
})
