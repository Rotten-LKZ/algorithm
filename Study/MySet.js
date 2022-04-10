
class MySet {
  value
  constructor() {
    this.value = []
  }
  add(el) {
    if (!this.has(el)) {
      this.value.push(el)
    }
  }

  has(el) {
    for (const con of this.value) {
      // 这里注意一下，在 MDN 规范里面，尽管 NaN !== NaN，但是在集合里面是不允许存在两个的
      if (isNaN(con) && isNaN(el)) {
        return true
      } else if (con === el) {
        return true
      }
    }
    return false
  }
}

let s = new MySet()
s.add(2)
console.log(s)
s.add(2)
console.log(s)