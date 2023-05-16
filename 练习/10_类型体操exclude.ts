/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 21:53:49
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 22:11:03
 * @FilePath: /练习/10_类型体操exclude.ts
 */
type AAA = "aaa" | "bbbb" | "ccc";

type cccc<T extends keyof any, K extends T> = T extends K ? never : T;

type IA1 = Exclude<AAA, "aaa">;
type IA2 = cccc<AAA, "aaa">;

export {};
