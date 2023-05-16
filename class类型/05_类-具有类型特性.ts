/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 18:33:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 18:39:06
 * @FilePath: /class类型/类-具有类型特性.ts
 */

/**
 * 类的作用：
 * 1，可以创建类对应的实例对象
 * 2。类本身可以作为这个实例的类型
 * 3.类也可以当成有个构造签名的函数
 */

class Person {}

const name = "aaa";

const p1 = new Person();

function printPerson(p: Person) {}

//传入构造函数
function p1Person(ctor: new () => void) {}

p1Person(Person);

export {};
