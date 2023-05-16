/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 01:04:08
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 01:14:56
 * @FilePath: /体操类型/01_类型的基本使用.ts
 */
type IDTYpe = number | string;

type PType = boolean extends IDTYpe ? true : false;

//列子重载函数

// function sum(num1:number,num2:number):number
// function sum1(num1: string, num2: string): string;

//错误做法:类型扩大化
// function sum1(num1: string | number, num2: string | number): string;

function sum1<T extends number | string>(
  num1: T,
  num2: T
): T extends number ? number : string;
function sum1(num1, num2) {
  return num1 + num2;
}
sum1(20, 40);
sum1("333", "222");

export {};
