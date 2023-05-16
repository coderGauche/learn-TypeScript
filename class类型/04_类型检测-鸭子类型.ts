/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 17:55:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 18:05:29
 * @FilePath: /class类型/类型检测-鸭子类型.ts
 */

/**
 * 现象：只要符合类型即可不报错，不关心是不是他的类型
 * ts类型检测时候使用的是鸭子类型检测
 * 鸭子类型：之关心属性和行为，不关心你是啥
 *
 */
class Preson {
  constructor(public name, public age) {}
}

function perintPerson(p: Preson) {
  console.log(p.name, p.age);
}

//都同时有name和age就不报错
// const p1 = new Preson('hhh',12)
perintPerson(new Preson("hhh", 12));
perintPerson({ name: "xxx", age: 34 });

export {};
