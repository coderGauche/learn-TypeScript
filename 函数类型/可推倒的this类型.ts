/**
 * 在没有指定的this的情况下，this的默认情况下是any类型
 * noImplicitThisn为true的时候  this就不能是隐式
 * 想解决这个问题两个办法
 * 1. noImplicitThisn为true
 * 2. 指定类型第一个参数为this，第二个参数开始  this参数会在编译的时候抹除掉
 */
