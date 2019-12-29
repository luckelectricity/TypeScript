class A {
  constructor() {
    this.nameA = 'a'
  }
  doA() {
    console.log('a')
  }
}

class B extends A {
  constructor() {
    super()
    this.nameB = 'b'
  }
  doB() {
    console.log('b')
  }
}

class C extends B {
  constructor() {
    super()
    this.nameC = 'c'
  }
  doC() {
    console.log('c')
  }
}

const c = new C()

console.log(c)

// const members = findMembers(c, 'name', 'do')

// function findMembers(cl, name, funName){
//   cl.__proto
// }