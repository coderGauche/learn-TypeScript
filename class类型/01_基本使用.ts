/*
 * @Author: Gauche楽
 * @Date: 2023-05-08 23:51:22
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-08 23:53:56
 * @FilePath: /class类型/基本使用.ts
 */

class Person {
  name: string;
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("xxx", 122);

console.log(p1.name);
