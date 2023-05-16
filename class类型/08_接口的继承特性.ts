/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 21:34:59
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 21:39:14
 * @FilePath: /class类型/08_接口的继承特性.ts
 */

/**
 * 可以从其他的接口中继承过来属性
 * 减少相同代码量
 * 如果使用了第三方库，给我们定义了一些属性
 * 自定义一个接口，同事你你希望自定义接口拥有第三方某个类型中所有的属性
 * 可以使用继承来实现
 */

interface IPerson {
  name: string;
  age: number;
}

interface Icon extends IPerson {
  slogan: string;
}

const p1: Icon = {
  name: "xxx",
  age: 18,
  slogan: "slogan",
};

export {};
