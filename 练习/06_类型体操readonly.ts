/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 20:26:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 20:28:31
 * @FilePath: /练习/06_类型体操readonly.ts
 */
interface A1 {
  name: string;
  age: number;
}

type A2<T> = {
  readonly [K in keyof T]: T[K];
};

type ccc = Readonly<A1>;
type ccc1 = A2<A1>;

export {};
