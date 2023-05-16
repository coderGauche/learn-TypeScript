/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 20:34:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 21:47:13
 * @FilePath: /练习/08_类型体操Pick.ts
 */
interface IA {
  name: string;
  age: number;
}

type sds<T, K extends keyof T> = {
  [R in K]: T[R];
};

type IA1 = Pick<IA, "name">;
type IA2 = sds<IA, "name">;
