/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 04:08:02
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 04:19:15
 * @FilePath: /泛型编程/05_泛型类的使用.ts
 */
class Point<T = number> {
  x: T;
  y: T;
  constructor(x: T, y: T) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(1, 2);

export {};
