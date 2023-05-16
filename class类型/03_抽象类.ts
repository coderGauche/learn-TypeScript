/*
 * @Author: Gauche楽
 * @Date: 2023-05-09 01:49:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 17:54:53
 * @FilePath: /class类型/抽象类.ts
 * abstract  抽象类  父类引入指向子类对象   多态   没有具体实现的方法(没有方法体)就是抽象方法
 * 抽象类的特点：
 * 抽象类不能被实例化
 * 抽象方法必须被子类实现，否则该类必须是个抽象类
 */

//不写实现体  只声明/  抽象方法必须在抽象类当中
abstract class Shape {
  abstract getArea(): void;
}

class Reactangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea() {
    return this.radius;
  }
}

// function getArea(shape: Reactangle |Circle) {   //这样做法很麻烦总往里加东西
function getArea(shape: Shape) {
  return shape.getArea();
}

getArea(new Reactangle(10, 20));
getArea(new Circle(5));
// getArea("ssss");
// getArea(new Shape()); //抽象类不被实例化

//在java中是不被允许的   为什么在ts可以这样做呢

getArea({ getArea: function () {} });

export {};
