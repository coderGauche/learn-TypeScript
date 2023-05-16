/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 17:09:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 18:38:54
 * @FilePath: /泛型编程/08_映射类型基础.ts
 */

//创建映射类型   想象成函数   不能用interface来定义
/**
 * 效果展示
 * 1.传入的T是IA的类型他keyof下T转成
 * [key in 'name'|'age']: T[key];
 * 2.keyof作用就是每次都实现一下遍历
 * name:IA['name']  =  name:string
 * age:IA['age']  =  age:number
 * 3.映射成功 {name: string; age: number;}
 */
type MapPerson<T> = {
  [key in keyof T]: T[key];
};

interface IA {
  name: string;
  age: number;
}

type IB = MapPerson<IA>;

export {};
