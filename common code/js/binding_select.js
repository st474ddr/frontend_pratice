let data = {
  menu: [
    {
      type: "類別1",
      title: "teettet",
    },
    {
      type: "類別1",
      title: "wewrewrwed",
    },
    {
      type: "類別2",
      title: "qqqq",
    },
    {
      type: "類別2",
      title: "d,sldlsd",
    },
  ],
  input: {
    type: null,
    title: null,
  },
}

let vue = new Vue({
  el: "#app",
  data: data,
  computed: {
    typeList() {
      let obj = {
        sort: [],
        map: {},
      }
      this.menu.forEach(({ type, title }, index) => {
        if (!obj.map[type]) {
          obj.sort.push(type)
          obj.map[type] = {
            sort: [],
            map: {},
          }
        }
        obj.map[type].sort.push(title)
        obj.map[type].map[title] = index
      })
      return obj
    },
    titleList() {
      this.input.title = null
      return this.input.type ? this.typeList.map[this.input.type] : []
    },
    content() {
      return this.input.title ? this.titleList.map[this.input.title] : null
    },
  },
})
