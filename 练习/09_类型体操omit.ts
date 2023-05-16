/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 20:38:00
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 21:52:18
 * @FilePath: /练习/09_类型体操omit.ts
 */
interface IA {
  name: string;
  age: number;
}

type aaaad<T, K extends keyof T> = {
  // [R in keyof T]; name age
  [R in keyof T as R extends K ? never : R]: T[R];
};

type IA1 = Omit<IA, "name">;
type IA2 = aaaad<IA, "name">;

export {};
