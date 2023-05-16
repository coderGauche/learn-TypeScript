/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 17:09:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 19:52:30
 * @FilePath: /练习/02_类型推断.ts
 */
function foo() {
  return "dddd";
}

function foo1() {
  return 1111;
}

type foo2 = (num: number, num2: number) => number;

type p1 = ReturnType<typeof foo>;
type p2 = ReturnType<typeof foo1>;
type p3 = ReturnType<foo2>;

/**
 * 1.实现函数返回类型的推断
 */

type AI<T extends (...args: any[]) => void> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

/**
 * 1.实现函数参数的推断
 */
type AI1<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

type A1 = AI<typeof foo>;
type A2 = AI<typeof foo1>;
type A3 = AI1<foo2>;

export {};
