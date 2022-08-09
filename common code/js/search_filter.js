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
    type: "全部",
    title: "",
  },
}

let vue = new Vue({
  el: "#app",
  data: data,
  computed: {
    typeFilterMenu() {
      return this.input.type == "全部"
        ? this.menu
        : this.menu.filter((item) => item.type == this.input.type)
    },
    titleFilterMenu() {
      return this.input.title == ""
        ? this.typeFilterMenu
        : this.typeFilterMenu.filter((item) =>
            item.title.includes(this.input.title)
          )
    },
  },
})
