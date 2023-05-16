/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:15:35
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 17:00:13
 * @FilePath: /体操类型/05_类型体操Partial.ts
 */
interface IA {
  name: string;
  age: number;
}

type IA1 = Partial<IA>;

type IAO<T> = {
  [P in keyof T]?: T[P];
};

type IA2 = IAO<IA>;

export {};
