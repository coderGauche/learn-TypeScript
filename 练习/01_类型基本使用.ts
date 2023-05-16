/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 17:02:04
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 17:07:14
 * @FilePath: /练习/01_类型基本使用.ts
 */
function foo<T extends number | string>(
  num1: T,
  num2: T
): T extends number ? string : number;

function foo(num1, num2) {
  return num1 + num2;
}

foo(1, 2);
foo("7", "2");

export {};
