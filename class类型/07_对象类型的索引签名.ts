/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 18:46:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 19:43:02
 * @FilePath: /class类型/07_对象类型的索引签名.ts
 */

interface Icollection {
  [key: string]: any; //代表的意思是这个数组或者对象获取里面的值 p1[0]  代表子元素key  :后面是值
  length: number;
} //上下有关联的

const p1 = ["aa", "bbb", "ccc"];
const p2 = { name: "age", age: 12 };

function foo(p: Icollection) {
  console.log(p[0]);
  console.log(p.length);
}

foo(p1);

console.log(p1);

export {};
