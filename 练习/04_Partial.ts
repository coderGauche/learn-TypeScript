/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 20:18:48
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 20:24:24
 * @FilePath: /练习/04_Partial.ts
 */
interface A1 {
  name: string;
  age: number;
}

type A2<T> = {
  [R in keyof T]?: T[R];
};

/**
 * 实现一样的效果
 */

type ccc = Partial<A1>;
type ccc1 = A2<A1>;
