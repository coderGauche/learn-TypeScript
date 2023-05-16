/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 03:47:02
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 03:48:23
 * @FilePath: /泛型编程/03_传入多个类型.ts
 */
function foo<T, K>(params: T, params2: K) {}

foo<number, string>(20, "xxxx");

export {};
