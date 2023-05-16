/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 22:14:07
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 22:15:59
 * @FilePath: /练习/12_类型体操nonnullable.ts
 */
type AAA = "aaa" | "bbbb" | "ccc" | null | undefined;

type CCC<T> = T extends undefined | null ? never : T;

type IA1 = NonNullable<AAA>;
type IA2 = CCC<AAA>;

export {};
