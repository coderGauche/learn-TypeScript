/*
 * @Author: Gauche楽
 * @Date: 2023-05-15 19:43:25
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-15 20:02:53
 * @FilePath: /练习/03_分发条件类型.ts
 */
/**
 * 现联合类型的分发类型分发
 * 例如 <number | string>   要求<number[] | string[]>
 *  T extends any 表示 T 类型能被赋值给 any 类型，
 */

type IDistribution<T> = T extends any ? T[] : never;

type A1 = IDistribution<number | string>;

export {};
