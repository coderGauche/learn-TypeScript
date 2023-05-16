/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 18:16:53
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 18:36:06
 * @FilePath: /泛型编程/09_映射类型的修饰符.ts
 */

type MapPerson<T> = {
  readonly [key in keyof T]?: T[key]; //加个？就是都是可选了或者readonly  都可以加
  //   +readonly [key in keyof T]+?: T[key]; //可以加个+一样的效果
  //   -readonly [key in keyof T]-?: T[key]; //可以加个-删除修饰符
};

interface IA {
  name: string;
  age: number;
  name1: string;
}

type IIA = MapPerson<IA>;

const p: IIA = {};

export {};
