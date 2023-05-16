/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 22:27:40
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 22:58:42
 * @FilePath: /知识拓展/02_内置类型导出.ts
 */
import { foo, type IA, type IB, Idata } from "./02_内置类型导入";
// import type {  IA, IB } from "./02_内置类型导入";

const aa1: IB = "1";
const aa: IA = 1;

foo(1, 2, 3);

Idata.format("dddd");
