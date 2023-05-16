/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:33:24
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:36:19
 * @FilePath: /体操类型/09_类型体操Pick.ts
 */
interface IA {
  name: string;
  age: number;
}

type IA1 = Pick<IA, "name">;

type IAO<T, K extends keyof T> = {
  [P in K]: T[P];
};

type IA2 = IAO<IA, "name">;

export {};
