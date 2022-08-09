<template>
  <div>
    <h1 v-if="id">No.{{ id }}</h1>
    <h1 v-if="list.length && id">hello! I'm {{ list[id - 1].name }}</h1>
    <h1 v-if="list.length && id">my hobby is {{ list[id - 1].hobby }}</h1>
  </div>
</template>

<script>
import hobbyStore from "@/store/hobbyStore.js"
export default {
  computed: {
    id: {
      get() {
        return this.$store.state.hobby ? this.$store.state.hobby.id : 1
      },
      set(val) {
        this.$store.commit("hobby/setId", val)
      },
    },
    list() {
      return this.$store.state.hobby ? this.$store.state.hobby.list : []
    },
  },

  methods: {
    changeHandler(e) {
      let id = this.id
      if (e.keyCode === 39) {
        id = parseInt(id) + 1
      } else if (e.keyCode === 37) {
        id = parseInt(id) - 1
      }
      // 使路由跟著畫面變化
      this.$router.replace({
        params: {
          id,
        },
      })
    },
  },
  mounted() {
    let id = this.$route.params.id
    if (id) {
      // 註冊單獨的vuex store， hobby就是當下namespace
      this.$store.registerModule("hobby", hobbyStore)
      this.$store.dispatch("hobby/getData", id)
      document.addEventListener("keyup", this.changeHandler)
    }
  },
  beforeDestroy() {
    this.$store.unregisterModule("hobby")
    document.removeEventListener("keyup", this.changeHandler)
  },
  watch: {
    $route() {
      let id = this.$route.params.id
      this.id = id
    },
  },
}
</script>
