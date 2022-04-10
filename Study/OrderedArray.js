
class OrderedArray {
  value
  constructor() {
    this.value = []
  }
  add(el) {
    if (this.value.length === 0) {
      this.value.push(el)
      return
    }
    for (let i = 0;i < this.value.length;i++) {
      if (el > this.value) {
        continue
      } else {
        this.value.splice(i, 0, el)
        break
      }
    }
  }
  /**
   * 在有序数组中，查找会变得异常地方便。这是用 JavaScript 实现的线性查找
   * 线性查找比如说我们在 [4, 7, 19, 45, 70] 找到 18，很明显是不存在的
   * 但是由于有序数组是排好序的，也就是说遍历到 19 还没发现 18，那么其实就不用找了
   * @param {number} val 要查找的数
   */
  linearSearch(val) {
    for (let i = 0;i < this.value.length;i++) {
      if (val === this.value[i]) {
        return i
      } else if (val < this.value[i]) {
        return -1
      }
    }
    return -1
  }
  /**
   * 二分查找
   * 我们可以取最中间的元素，如果发现数字比这个元素大，那么左边一半的所有数字都可以排除
   * 然后一直这样取，最后就能找到答案
   * @param {number} val 要查找的数
   */
  binarySearch(val) {
    let lowerBound = 0
    let upperBound = this.value.length - 1
    while (lowerBound <= upperBound) {
      // Math.floor 会向下取整
      const center = Math.floor(upperBound + lowerBound / 2)
      if (val === this.value[center]) {
        return center
      } else if (val > this.value[center]) {
        lowerBound = center + 1
      } else if (val < this.value[center]) {
        upperBound = center - 1
      }
    }
    return -1
  }
}

console.log('--- Add Element to Array ---')
let oa1 = new OrderedArray()
oa1.add(4)
oa1.add(2)
console.log(oa1)
oa1.add(-10)
console.log(oa1)

console.log('--- Linear Search ---')
let oa2 = new OrderedArray()
oa2.value = [4, 7, 19, 45, 70]
console.log(oa2.linearSearch(18))
console.log(oa2.linearSearch(45))

console.log('--- Binary Search ---')
let oa3 = new OrderedArray()
oa2.value = [4, 7, 19, 45, 70]
console.log(oa2.binarySearch(18))
console.log(oa2.binarySearch(4))
console.log(oa2.binarySearch(7))
console.log(oa2.binarySearch(19))
console.log(oa2.binarySearch(45))
console.log(oa2.binarySearch(70))
console.log(oa2.binarySearch(-5))
