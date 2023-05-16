/*
 * @Author: Gauche楽
 * @Date: 2023-05-13 16:59:49
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-13 17:04:54
 * @FilePath: /体操类型/03_分发条件类型.ts
 */

// type toArrqy<T> = T[];
type toArrqy<T> = T extends any ? T[] : never; //分发一遍  依次得出需要的参数  依次执行  number[]和string[]

type NUmberArray = toArrqy<number>;

//我们需要 NUmberArray1 = (string[]  | number[] ) 而不是 NUmberArray1 = (string | number)[]
type NUmberArray1 = toArrqy<number | string>;
