/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 02:12:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 02:17:06
 * @FilePath: /class类型/15_枚举类型.ts
 */

//定义枚举类型  大写
enum Direction {
  Up,
  Down,
  Right,
  Left,
}

const p1: Direction = Direction.Down;

function trunDirection(direction: Direction) {
  switch (direction) {
    case Direction.Left:
      console.log("<-");
      break;
  }
}

trunDirection(Direction.Left);

export {};
