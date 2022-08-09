let data = {
  obj: {
    num: 0,
  },
  objList: [{ num: 0 }, { num: 1 }, { num: 2 }],
  number: 0,
  numberList: [0, 1, 2],
}

new Vue({
  el: "#app",
  data: data,
  methods: {
    objListHandler(index) {
      this.objList[index].num++
    },
    numberListHandler(index) {
      // this.numberList[index]++ 如此操作只會改變資料，不會改變顯示，等到其他地方更新時才會更新顯示 (因為 $vm0.numberList[index] 單純是值，而不是Observer)
      this.$set(this.numberList, index, this.numberList[index] + 1)
    },
  },
  watch: {
    number(val, oldVal) {
      console.log("- number newVal: " + val, " oldVal: " + oldVal)
    },
    // 監看物件單一值變化
    ["obj.num"](val, oldVal) {
      console.log("- obj.num newVal: " + val, " oldVal: " + oldVal)
    },
    // 監看整個物件變化(值基本上一樣，因為物件本身並沒有改變)
    obj: {
      handler(val, oldVal) {
        console.log("- obj newVal: ", val, " oldVal: ", oldVal)
      },
      deep: true,
    },
    numberList(val, oldVal) {
      // 使用set(numberHandler) 就能夠被監看
      console.log("- numberList newVal: ", val, " oldVal: ", oldVal)
    },
    objList(val, oldVal) {
      // 不會通知 因為變動的是objList.num
      console.log("- objList newVal: ", val, " oldVal: ", oldVal)
    },
    objList: {
      handler(val, oldVal) {
        console.log("- objList newVal: ", val, " oldVal: ", oldVal)
      },
      deep: true,
    },
  },
})
