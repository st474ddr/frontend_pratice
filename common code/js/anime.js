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
  index: 0,
  menu2: [
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
  index2: 0,
}

new Vue({
  el: "#app",
  data: data,
  methods: {
    beforeEnterHandler(el) {
      $(el).css({ opacity: 0 })
    },
    enterHandler(el, done) {
      $(el).animate({ opacity: 1 }, 100, done)
    },
    afterEnterHandler(el) {
      $(el).css({ opacity: "" })
    },
  },
})
