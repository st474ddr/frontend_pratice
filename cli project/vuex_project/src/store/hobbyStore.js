import axios from "axios"
export default {
  namespaced: true,
  state: {
    id: 0,
    list: [],
  },
  mutations: {
    setId(state, id) {
      state.id = id
    },
    setData(state, data) {
      state.list = data
    },
  },
  actions: {
    getData(context, id) {
      context.commit("setId", id)
      return axios.get("/list.json").then((res) => {
        context.commit("setData", res.data)
      })
    },
  },
}
