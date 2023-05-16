/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 23:39:21
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 23:54:21
 * @FilePath: /class类型/11_对象类型索引签名基础.ts
 */

interface IPerson {
  name: string;
  age: number;
  height: number;
}

const p: IPerson = {
  name: "xx",
  age: 29,
  height: 88,
};

// console.log(p.address);

export {};
