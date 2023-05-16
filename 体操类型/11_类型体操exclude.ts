/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 17:41:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:44:39
 * @FilePath: /体操类型/11_类型体操exclude.ts
 */
type AAA = "aaa" | "bbbb" | "ccc";

type IA1 = Exclude<AAA, "aaa">;

type IAO<T, K> = T extends K ? never : T;

type IA2 = IAO<AAA, "aaa">;

export {};
