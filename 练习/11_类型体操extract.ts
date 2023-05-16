/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 22:11:17
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 22:13:50
 * @FilePath: /练习/11_类型体操extract.ts
 */
type AAA = "aaa" | "bbbb" | "ccc";

type CCC<T extends keyof any, K extends T> = T extends K ? K : never;

type IA1 = Extract<AAA, "aaa">;
type IA2 = CCC<AAA, "aaa">;

export {};
