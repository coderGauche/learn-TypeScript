/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:47:27
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:48:48
 * @FilePath: /体操类型/13_类型体操nonnullable.ts
 */
type AAA = "aaa" | "bbbb" | "ccc" | null | undefined;

type IA1 = NonNullable<AAA>;

type IAO<T> = T extends undefined | null ? never : T;

type IA2 = IAO<AAA>;

export {};
