/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-09-07 22:37:07
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-09-07 23:39:38
 * @FilePath: /stdv2/service/src/modules/pay/pay.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '@/common/auth/jwtAuth.guard'
import { PayService } from './pay.service'
import { PayDto } from './dto/pay.dto'
import { Request } from 'express'

@Controller('pay')
@ApiTags('pay')
export class PayController {
  constructor (private readonly payService: PayService) {}

  @Post('notify')
  @ApiOperation({ summary: 'hupi支付结果通知' })
  notifyHupi (@Body() body) {
    console.log('hupi ->body: ', body)
    return this.payService.notify(body)
  }

  @Get('notify')
  @ApiOperation({ summary: 'Epay支付结果通知' })
  notifyEpay (@Query() query) {
    console.log('epay ->query: ', query)
    return this.payService.notify(query)
  }

  @Post('pockyt-notify')
  @ApiOperation({ summary: 'pockyt支付结果通知' })
  notifyPockyt (@Body() body) {
    console.log('pockyt-notify ->body: ', body)
    return this.payService.notify(body)
  }

  @Post('verifySign')
  @ApiOperation({ summary: '获取verifySign' })
  generateSign (@Body() body) {
    console.log('verifySign ->body: ', body)
    return this.payService.getVerifySign(body)
  }
}
