/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 20:24:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 23:36:25
 * @FilePath: /基础和进阶/练习/05_类型体操required.ts
 */
interface A1 {
  name?: string;
  age?: number;
}

type A2<T> = {
  [K in keyof T]-?: T[K];
};

type ccc = Required<A1>;
type ccc1 = A2<A1>;

export {};
