/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 01:18:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 16:58:41
 * @FilePath: /体操类型/02_类型推断.ts
 */
type ATYpe = (num1: number, num2: string) => void;

function foo() {
  return "ddd";
}

//类型体操题目：ReturnType
/**
 * 类型推断  R是变量随便写
 * infer R
  ? R
  : false;
 */

type DDDD<T extends (...arg: any[]) => any> = T extends (
  ...arg: any[]
) => infer R
  ? R
  : never;

//推断参数   推断为true的时候返回推断的结果
type DDDDc<T extends (...arg: any[]) => any> = T extends (
  ...arg: infer A
) => any
  ? A
  : never;

type DOOTYpe = ReturnType<ATYpe>;
type FFFTYpe = ReturnType<typeof foo>;

type DOOTYpe1 = DDDD<ATYpe>;
type FFFTYpe1 = DDDD<typeof foo>;

type FOOOOO = DDDDc<ATYpe>;
