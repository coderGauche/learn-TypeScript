/*
 * @Author: Gauche楽
 * @Date: 2023-05-08 21:33:42
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-08 22:09:49
 * @FilePath: /函数类型/this的内置工具.ts
 */

/**
 *  1.提取函数类型获取this参数类型
 *  2.提取函数类型获取除了this的其他的参数类型
 */

function foo(this: { name: string }, num: string) {}

type fooType = typeof foo;

type typeThis = ThisParameterType<fooType>;

type OmitThis = OmitThisParameter<fooType>;

/**
 * thisType  是可以在函数中可通过上下文来定义this的类型  否则会报错  指定this的类型
 */

interface IState {
  name: string;
  age: number;
}

interface IData {
  state: IState;
  runing: () => void;
  eating: () => void;
}

const info: IData & ThisType<IState> = {
  state: { name: "why", age: 18 },
  runing: function () {
    this.name;
  },
  eating: function () {},
};

export {};
