/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:37:28
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:40:25
 * @FilePath: /体操类型/10_类型体操omit.ts
 */
interface IA {
  name: string;
  age: number;
}

type IA1 = Omit<IA, "name">;

type IAO<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type IA2 = IAO<IA, "name">;

export {};
