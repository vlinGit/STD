'use strict';const _0x244744=_0xdc23;(function(_0x2b143c,_0x20e581){const _0xf47f63=_0xdc23,_0x131c3a=_0x2b143c();while(!![]){try{const _0x2dd8df=-parseInt(_0xf47f63(0xf6))/0x1+parseInt(_0xf47f63(0xf2))/0x2*(parseInt(_0xf47f63(0x111))/0x3)+-parseInt(_0xf47f63(0x10f))/0x4*(-parseInt(_0xf47f63(0xeb))/0x5)+-parseInt(_0xf47f63(0x119))/0x6+-parseInt(_0xf47f63(0x11e))/0x7*(parseInt(_0xf47f63(0x11a))/0x8)+-parseInt(_0xf47f63(0x10d))/0x9*(parseInt(_0xf47f63(0xf8))/0xa)+-parseInt(_0xf47f63(0x112))/0xb*(-parseInt(_0xf47f63(0xf0))/0xc);if(_0x2dd8df===_0x20e581)break;else _0x131c3a['push'](_0x131c3a['shift']());}catch(_0x21bd54){_0x131c3a['push'](_0x131c3a['shift']());}}}(_0x585c,0x2240b));var __decorate=this&&this[_0x244744(0xf1)]||function(_0xed5b3f,_0x3b8113,_0x5eb01a,_0x17261a){const _0x424047=_0x244744;var _0x59d7cd=arguments[_0x424047(0xfa)],_0x39d197=_0x59d7cd<0x3?_0x3b8113:_0x17261a===null?_0x17261a=Object[_0x424047(0x126)](_0x3b8113,_0x5eb01a):_0x17261a,_0x2fd5ac;if(typeof Reflect==='object'&&typeof Reflect[_0x424047(0x133)]===_0x424047(0x11f))_0x39d197=Reflect[_0x424047(0x133)](_0xed5b3f,_0x3b8113,_0x5eb01a,_0x17261a);else{for(var _0x3e041d=_0xed5b3f['length']-0x1;_0x3e041d>=0x0;_0x3e041d--)if(_0x2fd5ac=_0xed5b3f[_0x3e041d])_0x39d197=(_0x59d7cd<0x3?_0x2fd5ac(_0x39d197):_0x59d7cd>0x3?_0x2fd5ac(_0x3b8113,_0x5eb01a,_0x39d197):_0x2fd5ac(_0x3b8113,_0x5eb01a))||_0x39d197;}return _0x59d7cd>0x3&&_0x39d197&&Object[_0x424047(0x129)](_0x3b8113,_0x5eb01a,_0x39d197),_0x39d197;},__metadata=this&&this[_0x244744(0xfc)]||function(_0x4d8d27,_0x1d594a){const _0x2b1b56=_0x244744;if(typeof Reflect==='object'&&typeof Reflect[_0x2b1b56(0x12e)]==='function')return Reflect[_0x2b1b56(0x12e)](_0x4d8d27,_0x1d594a);},__param=this&&this[_0x244744(0x124)]||function(_0x14e598,_0x572a95){return function(_0x27cbb2,_0x5813ce){_0x572a95(_0x27cbb2,_0x5813ce,_0x14e598);};};function _0x585c(){const _0x492be1=['createdAt','__metadata','verifyCaptcha','VerificationService','findOne','USED','../../common/utils','验证码不存在','ceil','data','createRandomCode','Message','DESC','verifyCode','https://dysmsapi.aliyuncs.com','Code','request','HttpStatus','2169pMlArJ','VerificationUseStatusEnum','182308SlbCUR','stringify','77124mfQrkP','1677841OolfZI','used','2017-05-25','typeorm','expiresAt','./verifycation.entity','验证码错误','1624026xHksWR','98336BVmGer','code','Repository','../../common/constants/status.constant','14SdxoRg','function','design:paramtypes','VerifycationEntity','确实必要参数错误！','@nestjs/typeorm','__param','getTime','getOwnPropertyDescriptor','S内不得重新发送','update','defineProperty','@alicloud/pop-core','__esModule','now','HttpException','metadata','verifycationEntity','getPhoneVerifyConfig','redisCacheService','BAD_REQUEST','decorate','getNamespace','验证码发送失败！','RedisCacheService','Injectable','15fsTOJS','SendSms','图形验证码错误、请检查填写!',':CAPTCHA:','globalConfigService','24RWVbSS','__decorate','2phrwgg','../globalConfig/globalConfig.service','../redisCache/redisCache.service','get','27127sfSNOq','sendPhoneCode','200sigiGY','save','length'];_0x585c=function(){return _0x492be1;};return _0x585c();}Object[_0x244744(0x129)](exports,_0x244744(0x12b),{'value':!![]}),exports[_0x244744(0xfe)]=void 0x0;const globalConfig_service_1=require(_0x244744(0xf3)),status_constant_1=require(_0x244744(0x11d)),typeorm_1=require(_0x244744(0x123)),typeorm_2=require(_0x244744(0x115)),verifycation_entity_1=require(_0x244744(0x117)),common_1=require('@nestjs/common'),utils_1=require(_0x244744(0x101)),redisCache_service_1=require(_0x244744(0xf4)),Core=require(_0x244744(0x12a));let VerificationService=class VerificationService{constructor(_0x1abc59,_0x50e6ee,_0x2a0cef){const _0x5eaff6=_0x244744;this[_0x5eaff6(0x12f)]=_0x1abc59,this[_0x5eaff6(0xef)]=_0x50e6ee,this['redisCacheService']=_0x2a0cef;}async['createVerification'](_0x13da45,_0x235c83,_0x29e5c2=0x1e*0x3c){const _0x4d2fd3=_0x244744,_0x159204=await this[_0x4d2fd3(0x12f)][_0x4d2fd3(0xff)]({'where':{'userId':_0x13da45['id'],'type':_0x235c83},'order':{'createdAt':_0x4d2fd3(0x107)}});if(_0x159204&&_0x159204['createdAt']['getTime']()+0x1*0x3c*0x3e8>Date['now']()){const _0x37eb27=Math[_0x4d2fd3(0x103)]((_0x159204[_0x4d2fd3(0xfb)][_0x4d2fd3(0x125)]()+0x1*0x3c*0x3e8-Date[_0x4d2fd3(0x12c)]())/0x3e8);throw new common_1[(_0x4d2fd3(0x12d))](_0x37eb27+_0x4d2fd3(0x127),common_1[_0x4d2fd3(0x10c)][_0x4d2fd3(0x132)]);}const _0x42ca00=(0x0,utils_1[_0x4d2fd3(0x105)])(),_0x28a4ab=new Date(Date[_0x4d2fd3(0x12c)]()+_0x29e5c2*0x3e8),{id:_0xcb236b,email:_0x4ff59e}=_0x13da45,_0x5f20d3={'userId':_0xcb236b,'type':_0x235c83,'code':_0x42ca00,'expiresAt':_0x28a4ab,'email':_0x4ff59e};return await this[_0x4d2fd3(0x12f)][_0x4d2fd3(0xf9)](_0x5f20d3);}async[_0x244744(0x108)]({code:_0x29bf59,id:_0x30cc01},_0x824025){const _0x5c29f5=_0x244744,_0x1f9fa2=await this[_0x5c29f5(0x12f)][_0x5c29f5(0xff)]({'where':{'id':_0x30cc01,'type':_0x824025},'order':{'createdAt':_0x5c29f5(0x107)}});if(!_0x1f9fa2)throw new common_1[(_0x5c29f5(0x12d))](_0x5c29f5(0x102),common_1[_0x5c29f5(0x10c)][_0x5c29f5(0x132)]);if(_0x1f9fa2[_0x5c29f5(0x113)]===status_constant_1[_0x5c29f5(0x10e)]['USED'])throw new common_1[(_0x5c29f5(0x12d))]('当前验证码已被使用！',common_1[_0x5c29f5(0x10c)][_0x5c29f5(0x132)]);else _0x1f9fa2[_0x5c29f5(0x113)]=status_constant_1['VerificationUseStatusEnum'][_0x5c29f5(0x100)],await this[_0x5c29f5(0x12f)][_0x5c29f5(0x128)]({'id':_0x30cc01},_0x1f9fa2);if(Number(_0x1f9fa2[_0x5c29f5(0x11b)])!==Number(_0x29bf59))throw new common_1[(_0x5c29f5(0x12d))](_0x5c29f5(0x118),common_1[_0x5c29f5(0x10c)]['BAD_REQUEST']);if(_0x1f9fa2[_0x5c29f5(0x116)]<new Date())throw new common_1[(_0x5c29f5(0x12d))]('验证码已过期',common_1[_0x5c29f5(0x10c)][_0x5c29f5(0x132)]);return _0x1f9fa2;}async[_0x244744(0xfd)](_0x893014){const _0x3de130=_0x244744,{captchaId:_0x279c47,captchaCode:_0x3bf797}=_0x893014,_0x836d69=await this[_0x3de130(0xef)][_0x3de130(0x134)](),_0x248816=_0x836d69+_0x3de130(0xee)+_0x279c47,_0x2cac30=await this[_0x3de130(0x131)][_0x3de130(0xf5)]({'key':_0x248816});await this[_0x3de130(0x131)]['del']({'key':_0x248816});if(!_0x2cac30)throw new common_1['HttpException']('图形验证码已过期、请重新输入!',common_1[_0x3de130(0x10c)][_0x3de130(0x132)]);if(!_0x2cac30||_0x2cac30!==_0x3bf797)throw new common_1[(_0x3de130(0x12d))](_0x3de130(0xed),common_1['HttpStatus'][_0x3de130(0x132)]);}async[_0x244744(0xf7)](_0x1b9529){const _0x2f5f16=_0x244744;var _0x5c26f;const {accessKeyId:_0xd1344f,accessKeySecret:_0x50aab0,SignName:_0x50ccf2,TemplateCode:_0x5b46ca}=await this[_0x2f5f16(0xef)][_0x2f5f16(0x130)](),{phone:_0xdb4403,code:_0x132725}=_0x1b9529;if(!_0xdb4403||!_0x132725)throw new common_1['HttpException'](_0x2f5f16(0x122),common_1['HttpStatus'][_0x2f5f16(0x132)]);const _0x5ee541=new Core({'accessKeyId':_0xd1344f,'accessKeySecret':_0x50aab0,'endpoint':_0x2f5f16(0x109),'apiVersion':_0x2f5f16(0x114)}),_0x490c0d={'PhoneNumbers':_0xdb4403,'SignName':_0x50ccf2,'TemplateCode':_0x5b46ca,'TemplateParam':JSON[_0x2f5f16(0x110)]({'code':_0x132725})},_0x4baa2d={'method':'POST','formatParams':![]};try{const _0x56b6a7=await _0x5ee541[_0x2f5f16(0x10b)](_0x2f5f16(0xec),_0x490c0d,_0x4baa2d);if(_0x56b6a7[_0x2f5f16(0x10a)]==='OK')return!![];else throw new common_1[(_0x2f5f16(0x12d))](_0x56b6a7[_0x2f5f16(0x106)]||_0x2f5f16(0x135),common_1['HttpStatus'][_0x2f5f16(0x132)]);}catch(_0x17eff3){throw new common_1[(_0x2f5f16(0x12d))](((_0x5c26f=_0x17eff3===null||_0x17eff3===void 0x0?void 0x0:_0x17eff3[_0x2f5f16(0x104)])===null||_0x5c26f===void 0x0?void 0x0:_0x5c26f[_0x2f5f16(0x106)])||'验证码发送失败！',common_1['HttpStatus'][_0x2f5f16(0x132)]);}}};function _0xdc23(_0x282489,_0x7e84ee){const _0x585c02=_0x585c();return _0xdc23=function(_0xdc233,_0x19214c){_0xdc233=_0xdc233-0xeb;let _0x346581=_0x585c02[_0xdc233];return _0x346581;},_0xdc23(_0x282489,_0x7e84ee);}VerificationService=__decorate([(0x0,common_1[_0x244744(0x137)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(verifycation_entity_1[_0x244744(0x121)])),__metadata(_0x244744(0x120),[typeorm_2[_0x244744(0x11c)],globalConfig_service_1['GlobalConfigService'],redisCache_service_1[_0x244744(0x136)]])],VerificationService),exports[_0x244744(0xfe)]=VerificationService;