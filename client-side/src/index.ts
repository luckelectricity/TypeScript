import lessons8 from "./lessons/8";
// number 类型
const a: number = 123;
// string 类型
const str: string = "kele";

// let kele: "kele"; 它们本身并不是很实用，但是可以在一个联合类型中组合创建一个强大的（实用的）抽象 其实我也不懂这句话啥意思 以后在看吧

 // kele = "123"; 不能重复定义 TS2454: Variable 'kele' is used before being assigned.
const list1: number[] = [a, 456, 789]; // 推荐写法
// const list2: Array<number> = [123, 456, 789]; 不推荐 会自动转换成上面那种写法
const bool: boolean = true;
const h1 = document.createElement("h1");

h1.innerHTML = "Hello, I am " + str + " " + a;
document.body.appendChild(h1);

/**
 * 枚举
 */

// 默认枚举
enum Status {
  Uploading,
  Success,
  Failed,
}

console.log(Status.Uploading); // 0
console.log(Status.Success); // 1
console.log(Status.Failed); // 2

// 修改初始编号
enum Color {
  Red = 2,
  Blue,
  Yellow,
}
console.log(Color.Red, Color.Blue, Color.Yellow); // 2, 3, 4

// 指定任意字段
enum StatusNum {
  Success = 200,
  NotFound = 404,
  Error = 500,
}
console.log(StatusNum.Success, StatusNum.NotFound, StatusNum.Error);
lessons8.fullName({fistName: "liu", lastName: "huan"});
