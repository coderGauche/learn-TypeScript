/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 16:53:58
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 16:54:31
 * @FilePath: /TypeScript/体操类型/15_体操类型Pick增强.ts
 */
/**
 * 根据特定的属性重组
 */
interface Person {
  name: string;
  sex: string;
  age: number;
  hobby: string[];
}
type TypeKeys<T> = T[keyof T];
type MyPick<K, T extends keyof K> = {
  [P in T]: K[P];
};

type specificMyPick<T, V> = Pick<
  T,
  TypeKeys<{ [P in keyof T]: T[P] extends V ? P : never }>
  //   { [P in keyof T]: T[P] extends V ? P : never }[keyof T]
>;

type MYPerson = MyPick<Person, "name">;
type newMYPerson = specificMyPick<Person, string | number>;

// type MYPerson = Pick<Person, "name" | "sex">;

// type MYPerson = {
//   name?: string;
//   sex: string;
// };
