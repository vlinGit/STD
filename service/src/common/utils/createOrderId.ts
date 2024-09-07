/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-09-07 22:37:07
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-09-07 23:10:41
 * @FilePath: /stdv2/service/src/common/utils/createOrderId.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { v1 as uuidv1 } from 'uuid'

export function createOrderId (): string {
  return uuidv1().toString().replace(/-/g, '')
}

export function generateOrderId (prefix: string = ''): string {
  // 1. 获取当前时间戳，精确到毫秒
  const timestamp = Date.now()

  // 2. 生成一个随机的四位数
  const randomNum = Math.floor(Math.random() * 9000) + 1000 // 生成1000到9999之间的随机数

  // 3. 组合订单号，格式为：PREFIX + 时间戳 + 随机数
  const orderNumber = `${prefix}${timestamp}${randomNum}`

  return orderNumber
}
