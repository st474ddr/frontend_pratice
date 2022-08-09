<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TitleComponent :compTitle="appTitle" />
    <!-- @textChange="changeHandler" 搭配子組件的emit 太繁瑣，可直接用sync -->
    <Input :text.sync="appTitle" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import TitleComponent from "./components/TitleComponent.vue"
import Input from "./components/Input/Input.vue"

export default {
  name: "App",
  data() {
    return {
      appTitle: "Hell!",
    }
  },
  components: {
    HelloWorld,
    TitleComponent,
    Input,
  },
  // methods: {
  //   changeHandler(val){
  //     this.appTitle = val;
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
