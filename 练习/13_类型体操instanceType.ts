/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 22:16:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 23:13:49
 * @FilePath: /练习/13_类型体操instanceType.ts
 */
class Person {
  constructor() {}
}

function foo<T extends new (...args: any[]) => any>(params: T): T {
  return new params();
}

type SDSD<T extends new (...args: any[]) => any> = T extends new (
  ...args: any[]
) => infer R
  ? R
  : never;

function foo1<T extends new (...args: any[]) => any>(
  params: T
): InstanceType<T> {
  return new params();
}

function foo2<T extends new (...args: any[]) => any>(params: T): SDSD<T> {
  return new params();
}

const p1 = foo2(Person);
const p2 = foo1(Person);

export {};
