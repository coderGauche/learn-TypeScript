/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 16:09:35
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 17:00:28
 * @FilePath: /泛型编程/07_泛型参数使用约束.ts
 */

interface IKK {
  name: string;
  age: number;
}

type IKKK = keyof IKK; //keyof 之后类型是‘name | age

//效果： function getObjectProject<O,K extends 'name' | 'age' | 'height'>(obj:O, key:K) {
function getObjectProject<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const info = {
  name: "why",
  age: 18,
  height: 1.88,
};

const name = getObjectProject(info, "name");
// const name = getObjectProject(info, "address");   错误示范

export {};
