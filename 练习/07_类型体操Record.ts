/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 20:28:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 23:39:16
 * @FilePath: /基础和进阶/练习/07_类型体操Record.ts
 */
interface IA {
  name: string;
  age: number;
}

type t1 = "11" | "22" | "33";

type DDD<T extends keyof any, K> = {
  [R in T]: K;
};

type IA1 = Record<t1, IA>;
type IA2 = DDD<t1, IA>;

export {};
