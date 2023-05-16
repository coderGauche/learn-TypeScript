/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:22:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:23:04
 * @FilePath: /体操类型/07_类型体操readonly.ts
 */
interface IA {
  name: string;
  age: number;
}

type IA1 = Readonly<IA>;

type IAO<T> = {
  readonly [P in keyof T]: T[P];
};

type IA2 = IAO<IA>;

export {};
