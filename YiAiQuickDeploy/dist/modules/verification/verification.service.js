'use strict';const _0x326496=_0x2851;function _0xc56b(){const _0x49959e=['now','typeorm','metadata','GlobalConfigService','验证码已过期','HttpException','../globalConfig/globalConfig.service','__param','9FWEZpJ','DESC','decorate','Message','验证码错误','../../common/constants/status.constant','7171540aJnnev','length','__esModule','verifyCaptcha','SendSms','findOne','design:paramtypes','../../common/utils','2017-05-25','验证码发送失败！','40syhmoX','POST','createRandomCode','4063876LGkhwC','defineProperty','RedisCacheService','图形验证码已过期、请重新输入!','@alicloud/pop-core','@nestjs/typeorm','4934172pZWdLt','__metadata','VerifycationEntity','createVerification','data','save','request','VerificationService','createdAt','VerificationUseStatusEnum','object','验证码不存在','@nestjs/common','ceil','3csvbGe','12FTmare','verifyCode','./verifycation.entity','6329970aEpCSQ','Injectable','redisCacheService','verifycationEntity','globalConfigService','图形验证码错误、请检查填写!','确实必要参数错误！','sendPhoneCode','function','expiresAt','del','S内不得重新发送','used','getNamespace','10vXxvrA','54145069vEOAPp','HttpStatus',':CAPTCHA:','2160655qFMbEk','BAD_REQUEST','323513mabDDO','USED','https://dysmsapi.aliyuncs.com','update','../redisCache/redisCache.service','getOwnPropertyDescriptor','code'];_0xc56b=function(){return _0x49959e;};return _0xc56b();}(function(_0xce1caa,_0x205ae9){const _0x477ea0=_0x2851,_0x1c67ef=_0xce1caa();while(!![]){try{const _0x283c68=-parseInt(_0x477ea0(0x17d))/0x1*(parseInt(_0x477ea0(0x177))/0x2)+-parseInt(_0x477ea0(0x1b3))/0x3*(parseInt(_0x477ea0(0x19f))/0x4)+-parseInt(_0x477ea0(0x192))/0x5+-parseInt(_0x477ea0(0x1a5))/0x6+parseInt(_0x477ea0(0x17b))/0x7*(parseInt(_0x477ea0(0x19c))/0x8)+-parseInt(_0x477ea0(0x18c))/0x9*(parseInt(_0x477ea0(0x169))/0xa)+parseInt(_0x477ea0(0x178))/0xb*(parseInt(_0x477ea0(0x1b4))/0xc);if(_0x283c68===_0x205ae9)break;else _0x1c67ef['push'](_0x1c67ef['shift']());}catch(_0x3474e4){_0x1c67ef['push'](_0x1c67ef['shift']());}}}(_0xc56b,0xe6143));var __decorate=this&&this['__decorate']||function(_0x1a447e,_0x2b4c47,_0x3b124b,_0x270281){const _0x58963e=_0x2851;var _0x2daf0c=arguments[_0x58963e(0x193)],_0x390d18=_0x2daf0c<0x3?_0x2b4c47:_0x270281===null?_0x270281=Object[_0x58963e(0x182)](_0x2b4c47,_0x3b124b):_0x270281,_0x3a4acd;if(typeof Reflect===_0x58963e(0x1af)&&typeof Reflect[_0x58963e(0x18e)]===_0x58963e(0x171))_0x390d18=Reflect[_0x58963e(0x18e)](_0x1a447e,_0x2b4c47,_0x3b124b,_0x270281);else{for(var _0x546540=_0x1a447e[_0x58963e(0x193)]-0x1;_0x546540>=0x0;_0x546540--)if(_0x3a4acd=_0x1a447e[_0x546540])_0x390d18=(_0x2daf0c<0x3?_0x3a4acd(_0x390d18):_0x2daf0c>0x3?_0x3a4acd(_0x2b4c47,_0x3b124b,_0x390d18):_0x3a4acd(_0x2b4c47,_0x3b124b))||_0x390d18;}return _0x2daf0c>0x3&&_0x390d18&&Object[_0x58963e(0x1a0)](_0x2b4c47,_0x3b124b,_0x390d18),_0x390d18;},__metadata=this&&this[_0x326496(0x1a6)]||function(_0x44a386,_0x4c8851){const _0x1ff805=_0x326496;if(typeof Reflect===_0x1ff805(0x1af)&&typeof Reflect[_0x1ff805(0x186)]===_0x1ff805(0x171))return Reflect['metadata'](_0x44a386,_0x4c8851);},__param=this&&this[_0x326496(0x18b)]||function(_0x312eff,_0x5d49e4){return function(_0x2e7410,_0x41a48f){_0x5d49e4(_0x2e7410,_0x41a48f,_0x312eff);};};function _0x2851(_0x3635b4,_0x51f99e){const _0xc56b15=_0xc56b();return _0x2851=function(_0x285101,_0x102ea3){_0x285101=_0x285101-0x168;let _0x4d291a=_0xc56b15[_0x285101];return _0x4d291a;},_0x2851(_0x3635b4,_0x51f99e);}Object['defineProperty'](exports,_0x326496(0x194),{'value':!![]}),exports[_0x326496(0x1ac)]=void 0x0;const globalConfig_service_1=require(_0x326496(0x18a)),status_constant_1=require(_0x326496(0x191)),typeorm_1=require(_0x326496(0x1a4)),typeorm_2=require(_0x326496(0x185)),verifycation_entity_1=require(_0x326496(0x168)),common_1=require(_0x326496(0x1b1)),utils_1=require(_0x326496(0x199)),redisCache_service_1=require(_0x326496(0x181)),Core=require(_0x326496(0x1a3));let VerificationService=class VerificationService{constructor(_0x46f08c,_0x6c4472,_0xba98f4){const _0x512d58=_0x326496;this['verifycationEntity']=_0x46f08c,this[_0x512d58(0x16d)]=_0x6c4472,this[_0x512d58(0x16b)]=_0xba98f4;}async[_0x326496(0x1a8)](_0xaa4aab,_0x474a87,_0x5abb9a=0x1e*0x3c){const _0x2db2ea=_0x326496,_0x375781=await this[_0x2db2ea(0x16c)][_0x2db2ea(0x197)]({'where':{'userId':_0xaa4aab['id'],'type':_0x474a87},'order':{'createdAt':_0x2db2ea(0x18d)}});if(_0x375781&&_0x375781[_0x2db2ea(0x1ad)]['getTime']()+0x1*0x3c*0x3e8>Date[_0x2db2ea(0x184)]()){const _0x580521=Math[_0x2db2ea(0x1b2)]((_0x375781['createdAt']['getTime']()+0x1*0x3c*0x3e8-Date['now']())/0x3e8);throw new common_1['HttpException'](_0x580521+_0x2db2ea(0x174),common_1[_0x2db2ea(0x179)][_0x2db2ea(0x17c)]);}const _0x320324=(0x0,utils_1[_0x2db2ea(0x19e)])(),_0x3fa83a=new Date(Date[_0x2db2ea(0x184)]()+_0x5abb9a*0x3e8),{id:_0x3ccd6b,email:_0x30ff68}=_0xaa4aab,_0x4bb697={'userId':_0x3ccd6b,'type':_0x474a87,'code':_0x320324,'expiresAt':_0x3fa83a,'email':_0x30ff68};return await this['verifycationEntity'][_0x2db2ea(0x1aa)](_0x4bb697);}async[_0x326496(0x1b5)]({code:_0x3df3dd,id:_0x3637e1},_0x413624){const _0x16bf72=_0x326496,_0x3dde44=await this[_0x16bf72(0x16c)][_0x16bf72(0x197)]({'where':{'id':_0x3637e1,'type':_0x413624},'order':{'createdAt':'DESC'}});if(!_0x3dde44)throw new common_1[(_0x16bf72(0x189))](_0x16bf72(0x1b0),common_1[_0x16bf72(0x179)][_0x16bf72(0x17c)]);if(_0x3dde44['used']===status_constant_1[_0x16bf72(0x1ae)][_0x16bf72(0x17e)])throw new common_1[(_0x16bf72(0x189))]('当前验证码已被使用！',common_1['HttpStatus'][_0x16bf72(0x17c)]);else _0x3dde44[_0x16bf72(0x175)]=status_constant_1['VerificationUseStatusEnum']['USED'],await this[_0x16bf72(0x16c)][_0x16bf72(0x180)]({'id':_0x3637e1},_0x3dde44);if(Number(_0x3dde44[_0x16bf72(0x183)])!==Number(_0x3df3dd))throw new common_1['HttpException'](_0x16bf72(0x190),common_1[_0x16bf72(0x179)]['BAD_REQUEST']);if(_0x3dde44[_0x16bf72(0x172)]<new Date())throw new common_1[(_0x16bf72(0x189))](_0x16bf72(0x188),common_1['HttpStatus'][_0x16bf72(0x17c)]);return _0x3dde44;}async[_0x326496(0x195)](_0x8b8b39){const _0x52e2b5=_0x326496,{captchaId:_0x39542a,captchaCode:_0x2b3803}=_0x8b8b39,_0x44e871=await this[_0x52e2b5(0x16d)][_0x52e2b5(0x176)](),_0x461160=_0x44e871+_0x52e2b5(0x17a)+_0x39542a,_0x56336a=await this['redisCacheService']['get']({'key':_0x461160});await this[_0x52e2b5(0x16b)][_0x52e2b5(0x173)]({'key':_0x461160});if(!_0x56336a)throw new common_1[(_0x52e2b5(0x189))](_0x52e2b5(0x1a2),common_1[_0x52e2b5(0x179)][_0x52e2b5(0x17c)]);if(!_0x56336a||_0x56336a!==_0x2b3803)throw new common_1[(_0x52e2b5(0x189))](_0x52e2b5(0x16e),common_1[_0x52e2b5(0x179)][_0x52e2b5(0x17c)]);}async[_0x326496(0x170)](_0x58c490){const _0x4554dd=_0x326496;var _0x176ad8;const {accessKeyId:_0x4013e3,accessKeySecret:_0x984930,SignName:_0x321b2d,TemplateCode:_0x2ca269}=await this[_0x4554dd(0x16d)]['getPhoneVerifyConfig'](),{phone:_0x3ec3bd,code:_0x287740}=_0x58c490;if(!_0x3ec3bd||!_0x287740)throw new common_1[(_0x4554dd(0x189))](_0x4554dd(0x16f),common_1[_0x4554dd(0x179)][_0x4554dd(0x17c)]);const _0x3b6495=new Core({'accessKeyId':_0x4013e3,'accessKeySecret':_0x984930,'endpoint':_0x4554dd(0x17f),'apiVersion':_0x4554dd(0x19a)}),_0x2429b8={'PhoneNumbers':_0x3ec3bd,'SignName':_0x321b2d,'TemplateCode':_0x2ca269,'TemplateParam':JSON['stringify']({'code':_0x287740})},_0x35f59f={'method':_0x4554dd(0x19d),'formatParams':![]};try{const _0x500702=await _0x3b6495[_0x4554dd(0x1ab)](_0x4554dd(0x196),_0x2429b8,_0x35f59f);if(_0x500702['Code']==='OK')return!![];else throw new common_1[(_0x4554dd(0x189))](_0x500702[_0x4554dd(0x18f)]||_0x4554dd(0x19b),common_1[_0x4554dd(0x179)][_0x4554dd(0x17c)]);}catch(_0xf117ad){throw new common_1['HttpException'](((_0x176ad8=_0xf117ad===null||_0xf117ad===void 0x0?void 0x0:_0xf117ad[_0x4554dd(0x1a9)])===null||_0x176ad8===void 0x0?void 0x0:_0x176ad8[_0x4554dd(0x18f)])||'验证码发送失败！',common_1[_0x4554dd(0x179)][_0x4554dd(0x17c)]);}}};VerificationService=__decorate([(0x0,common_1[_0x326496(0x16a)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(verifycation_entity_1[_0x326496(0x1a7)])),__metadata(_0x326496(0x198),[typeorm_2['Repository'],globalConfig_service_1[_0x326496(0x187)],redisCache_service_1[_0x326496(0x1a1)]])],VerificationService),exports['VerificationService']=VerificationService;