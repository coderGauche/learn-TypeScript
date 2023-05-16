/*
 * @Author: Gauche楽
 * @Date: 2023-05-08 17:14:24
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 23:35:39
 * @FilePath: /基础和进阶/函数类型/函数重载.ts
 */

/**
 * 重载签名：
 * 在通用的库或者工具在用
 * Tip：
 * TypeScript 中的函数重载没有任何运行时开销。它只允许你记录希望调用函数的方式，并且编译器会检查其余代码。
 */

function add(num1: number | number[], num2: number): number;
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): any {
  return num1 + num2;
}

add(1, 2);
add("1", "2");
// add('xxx',222)   x

export {};
