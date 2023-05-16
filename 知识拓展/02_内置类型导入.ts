/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 22:26:08
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 23:00:34
 * @FilePath: /知识拓展/02_内置类型导入.ts
 */
function foo(n1: number, n2: number, n3: number): number {
  return n1 + n2 + n3;
}

type IA = number;
type IB = string;

//命名空间
namespace Idata {
  export function format(date) {
    return "sssssss";
  }
}

export { foo, IA, IB, Idata };
