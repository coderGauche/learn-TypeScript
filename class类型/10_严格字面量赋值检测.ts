/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 23:13:00
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 23:36:21
 * @FilePath: /class类型/10_严格字面量赋值检测.ts
 */

/**
 * 发生这个原因是为什么呢？
 * 第一次创建的对象字面量称之为fresh新鲜的
 * 当一个新的对象字面量分配各一个变量或传递给一个非空目标类型的参数时，指定目标类型属性是错误的
 * 当类型断言或对象字面量的类型扩大时，新鲜度会消失
 * 第一次有新鲜感，到第二次就正常没有那么严格
 */

interface IPerson {
  name: string;
  age: number;
}

// 定义info  类型IPerson
// const obj: IPerson = {
const obj = {
  name: "xxx",
  age: 28,

  //多一个属性
  height: 1.88,
};

const info: IPerson = obj;

function foo(p: IPerson) {}

const fp = { name: "xxx", age: 28, height: 19 }; //先赋值变量不报错
// foo({ name: "xxx", age: 28, height: 19 });   //直接赋值变量报错  上面的对象类似
foo(fp);

export {};
