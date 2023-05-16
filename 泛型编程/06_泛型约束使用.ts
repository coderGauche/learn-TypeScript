/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 04:21:04
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 04:53:21
 * @FilePath: /泛型编程/06_泛型约束使用.ts
 */
interface Alength {
  length: number;
}
//利用extends进行约束  为什么约束就是给他限制条件
function getLength<T extends Alength>(age: T) {
  return age;
}

getLength("aaa");
getLength(["aaa", "bbbb"]);
getLength({ length: 100 });
