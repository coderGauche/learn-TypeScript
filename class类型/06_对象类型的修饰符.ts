/*
 * @Author: Gauche楽
 * @Date: 2023-05-10 18:40:32
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-10 18:45:13
 * @FilePath: /class类型/06_对象类型的修饰符.ts
 */

//定义对象类型
type IPerson = {
  name?: string; //？可选属性
  readonly age: number; //只读属性
};

interface IKun {
  name: string;
  slogan: string;
}
