/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 03:49:53
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 03:58:52
 * @FilePath: /泛型编程/04_泛型接口.ts
 */
interface Icon<T = number, K = string> {
  name: K;
  age: T;
  slogn: K;
}

const kunku: Icon<number, string> = {
  name: "xxx",
  age: 18,
  slogn: "xssfsf",
};
console.log(kunku);
