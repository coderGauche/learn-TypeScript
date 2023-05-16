/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 21:39:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 21:51:10
 * @FilePath: /class类型/09_接口中的类实现过程.ts
 */

interface Icon {
  name: string;
  age: number;
  slogan: string;
  play: () => void;
}
interface Irun {
  run: string;
}

const ikun: Icon = {
  name: "xxx",
  age: 18,
  slogan: "fffff",
  play: () => {},
};

// 作用：接口被类实现   可实现多个
class Person implements Icon, Irun {
  name: string;
  run: string;
  age: number;
  slogan: string;
  play: () => void;
}

const p1 = new Person();
p1.play();

export {};
