/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:21:18
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:21:57
 * @FilePath: /体操类型/06_类型体操required.ts
 */
interface IA {
  name?: string;
  age?: number;
}

type IA1 = Required<IA>;

type IAO<T> = {
  [P in keyof T]-?: T[P];
};

type IA2 = IAO<IA>;

export {};
