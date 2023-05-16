/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 00:09:28
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 00:27:20
 * @FilePath: /class类型/12_对象类型索引签名基础-两个签名.ts
 */
interface IndexType {
  //   允许的写法
  // [inedx: number]: string;
  // [key: string]: any;
  // 不允许的写法
  // [inedx: number]: string | number;
  // [key: string]: string;
  /**
   * 要求一，
   * 不允许的写法 数字类型索引的类型，必须是字符串类型索引的类型的子类型
   * 原因：所有的数字类型都是会转成字符串类型去对象获取内容
   * 结论：数字类型必须是比如字符串类型更加确定的类型（需要时字符串类型的子类型）
   * 数字0：number|string，当我们是一个数字的时候，既要满足通过number去拿到的内容，不会和string拿到的结果矛盾
   *
   * 会产生矛盾
   * 数字0：string | number
   * 数字‘0’：string
   *
   * 不会产生矛盾
   * 数字‘0’：string
   * 数字0：string | number
   */
  /**
   * 要求二、
   * 如果索引签名中有定义其他属性，其他属性返回的类型，必须符合string类型返回的属性
   * [inedx: number]: string;
   * [inedx: number]: string | number;
   *
   * aaa:bolean 不行
   */
}

export {};
