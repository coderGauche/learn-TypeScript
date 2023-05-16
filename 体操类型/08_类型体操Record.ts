/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:23:29
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:32:57
 * @FilePath: /体操类型/08_类型体操Record.ts
 */
interface IA {
  name: string;
  age: number;
}

type test = keyof any; //type test = string | number | symbol

type t1 = "11" | "22" | "33";
type IA1 = Record<t1, IA>;

//确保t1是联合类型的话这么写指定的   T extends keyof any
type IAO<T extends keyof any, K> = {
  [P in T]: K;
};

type IA2 = IAO<t1, IA>;

export {};
