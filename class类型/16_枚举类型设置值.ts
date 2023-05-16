/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 02:19:41
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 02:24:53
 * @FilePath: /class类型/16_枚举类型设置值.ts
 */
//数字没有阻碍的话会递增
enum Direction {
  Up = 100,
  Down = "Down",
  Right = "Right",
  Left = "Left",
}

enum Direction1 {
  Up = -1 << 0, //位运算
  Down = 1 << 2,
  Right = 1 << 1,
}
