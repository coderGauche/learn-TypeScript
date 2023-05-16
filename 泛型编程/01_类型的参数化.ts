/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 02:55:24
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 03:14:04
 * @FilePath: /泛型编程/01_类型的参数化.ts
 */
function foo<T>(arg: T): T {
  return arg;
}

//完整写法
foo<number>(28);
foo<string>("xxx");
foo<{ name: string }>({ name: "xxx" });

//省略写法  //类型推到
foo(28);
const p1 = foo("’xxx"); //const类型转换成更具体
let p2 = foo("’xxx"); //let只推断类型
