/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:49:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 18:04:07
 * @FilePath: /体操类型/14_类型体操instanceType.ts
 */

class Person {}

function foo<T extends new (...agrs: any[]) => any>(ctor: T): T {
  return new ctor();
}
//InstanceType作用是动态推断构造函数类型
//实现一些通过创建通用函数工具才会用到
function foo1<T extends new (...agrs: any[]) => any>(ctor: T): InstanceType<T> {
  return new ctor();
}

//类型体操

type AAAAA<T extends new (...agrs: any[]) => any> = T extends new (
  ...agrs: any[]
) => infer R
  ? R
  : never;

function foo2<T extends new (...agrs: any[]) => any>(ctor: T): AAAAA<T> {
  return new ctor();
}

const p1 = foo(Person); //const p1: typeof Person
const p2 = foo1(Person); //const p2: Person
const p3 = foo1(Person); //const p3: Person

export {};
