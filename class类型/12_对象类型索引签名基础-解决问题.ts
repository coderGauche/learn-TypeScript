/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 23:53:18
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 00:09:10
 * @FilePath: /class类型/12_对象类型索引签名基础-解决问题.ts
 */

interface IndexTYpe {
  [key: string]: any; //[key:string | number]:any  不能这样写，索引必须指定单一类型
  //   [key: number]: string; //[key:string | number]:any  不能这样写，索引必须指定单一类型
}

// [key: number]: string;   不报错
// const names: IndexTYpe = ["aa", "bb"];

// [key: string]: string;  报错
// 为啥会报错  严格字面量赋值检测： ["aa", "bb"] =》Array实例 里面会有map  forEach他们的返回值不是字符串所以报错
/**
 * 用严格字面量赋值检测这种解决方式不好使，需要精准匹配
 * const aa = ["aa", "bb"];
 * const names: IndexTYpe = aa;
 */
// const names: IndexTYpe = ["aa", "bb"];

// [key: string]: any;    name[0]  === name['0']   不报错
const names: IndexTYpe = ["aa", "bb"];

export {};
