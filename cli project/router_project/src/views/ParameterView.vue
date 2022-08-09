<template>
  <div>
    <h1>{{ number }}</h1>
    <router-link to="/parameter?parameter=1"
      ><button>一般模式</button></router-link
    >
    <router-link to="/parameter/restful/1"
      ><button>rest模式</button></router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "0",
    }
  },
  methods: {
    changeHandler(e) {
      let para = this.number
      if (e.keyCode === 39) {
        para = parseInt(para) + 1
      } else if (e.keyCode === 37) {
        para = parseInt(para) - 1
      }
      this.number = para
    },
  },
  mounted() {
    let para = this.$route.query.parameter
    if (para === undefined) {
      para = this.$route.params.parameter
      console.log(para)
    }

    if (para) {
      this.number = para
      document.addEventListener("keyup", this.changeHandler)
    }
  },
  // 若 route 沒變只有參數變化，vue router不會重新渲染畫面，所以要用watch來觸發
  watch: {
    $route() {
      let para = this.$route.query.parameter

      if (para == undefined) {
        para = this.$route.params.parameter
      }
      console.log(para)
      this.number = para
    },
  },
}
</script>
