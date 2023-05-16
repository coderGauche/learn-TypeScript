/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:46:38
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:46:45
 * @FilePath: /体操类型/12_类型体操extract.ts
 */
type AAA = "aaa" | "bbbb" | "ccc";

type IA1 = Extract<AAA, "aaa">;

type IAO<T, K> = T extends K ? T : never;

type IA2 = IAO<AAA, "aaa">;

export {};
