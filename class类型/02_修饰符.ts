/*
 * @Author: Gauche楽
 * @Date: 2023-05-09 00:01:58
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-09 01:47:30
 * @FilePath: /class类型/修饰符.ts
 */

/**
 * public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的;
 * private 修饰的是仅在同一类中可见、私有的属性或方法;
 * protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法; 继承内部可用
 * readonly  只读属性
 * get和set
 */

class Person {
  private _name: string;
  constructor(name, public age) {
    this.name = name;
  }

  set name(value: string) {
    this.name = value;
  }

  get name() {
    return this._name;
  }
}

const p = new Person("aaa", 122);

p1.name = "xxxx";
console.log(p.name);

export {};
