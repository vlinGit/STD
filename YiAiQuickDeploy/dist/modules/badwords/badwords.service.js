'use strict';function _0xa6f5(_0x25ea8f,_0xe60bcd){const _0x4a11e5=_0x4a11();return _0xa6f5=function(_0xa6f518,_0x5ebc8b){_0xa6f518=_0xa6f518-0x11a;let _0x23ad2c=_0x4a11e5[_0xa6f518];return _0x23ad2c;},_0xa6f5(_0x25ea8f,_0xe60bcd);}const _0x39bb13=_0xa6f5;(function(_0x7b0dc1,_0x977d72){const _0x56cc1b=_0xa6f5,_0x534027=_0x7b0dc1();while(!![]){try{const _0x3ea621=parseInt(_0x56cc1b(0x17c))/0x1+parseInt(_0x56cc1b(0x164))/0x2*(-parseInt(_0x56cc1b(0x184))/0x3)+parseInt(_0x56cc1b(0x139))/0x4+-parseInt(_0x56cc1b(0x14d))/0x5+-parseInt(_0x56cc1b(0x12e))/0x6+parseInt(_0x56cc1b(0x159))/0x7*(-parseInt(_0x56cc1b(0x121))/0x8)+parseInt(_0x56cc1b(0x11d))/0x9;if(_0x3ea621===_0x977d72)break;else _0x534027['push'](_0x534027['shift']());}catch(_0x472322){_0x534027['push'](_0x534027['shift']());}}}(_0x4a11,0xb749a));function _0x4a11(){const _0x74d25e=['1102139ZwVYcM','nineai','forEach','axios','recordUserBadWords','onModuleInit','function','queryBadWords','333teDaAC','./badwords.entity','globalConfigService','keyword','您提交的信息中包含','push','length','Like','find','更新敏感词失败','badWords','../user/user.entity','match','baiduCheckBadWords','getOwnPropertyDescriptor','18999963OfTfNY','敏感词已经存在了、请勿重复添加','checkBadWordsByConfig','delete','40yGIZex','application/x-www-form-urlencoded','https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token=','删除敏感词成功','../../common/utils','set','userId','code','loadBadWords','@nestjs/common','Repository','violationLogEntity','execute','6364626zAeaCb','自定义','updateBadWords','typeorm','data','更新敏感词成功','ASC','HttpStatus','category','decorate','application/json','4668464OxXRia','您提交的信息中包含违规的内容、我们已对您的账户进行标记、请合规使用！','您提交的内容中包含','../globalConfig/globalConfig.service','DESC','hideString','save','log','default','getSensitiveConfig','删除敏感词失败','extractContent','avatar','baidu','的内容、我们已对您的账户进行标记、请合规使用！','affected','createQueryBuilder','error:\x20','stringify','./violationLog.entity','5746035IzEjFQ','检测失败','metadata','nineaiCheckBadWords','敏感词不存在,请检查您的提交信息','status','__decorate','msg','敏感词已存在,请检查您的提交信息','post','findAndCount','violationCount\x20+\x201','1670011yoGYXw','InjectRepository','findOne','GlobalConfigService','super','百度云检测','violation','defineProperty','object','userInfo','UserEntity','4086IEGwjx','email','user','map','添加敏感词成功','敏感词检测\x20|\x20','__esModule','word_list','Injectable','NineAi检测','userEntity','update','HttpException','formarTips','BAD_REQUEST','badWordsEntity','addBadWord','customSensitiveWords','id\x20=\x20:userId','typeOriginCn','join','百度文本检测出现错误、请查看配置信息:\x20','自定义检测','__param'];_0x4a11=function(){return _0x74d25e;};return _0x4a11();}var __decorate=this&&this[_0x39bb13(0x153)]||function(_0x4a8508,_0x5183e7,_0x39bc4c,_0xd22814){const _0xb79bfc=_0x39bb13;var _0x4feb85=arguments['length'],_0x50f6b3=_0x4feb85<0x3?_0x5183e7:_0xd22814===null?_0xd22814=Object[_0xb79bfc(0x11c)](_0x5183e7,_0x39bc4c):_0xd22814,_0x10a5fd;if(typeof Reflect==='object'&&typeof Reflect[_0xb79bfc(0x137)]===_0xb79bfc(0x182))_0x50f6b3=Reflect[_0xb79bfc(0x137)](_0x4a8508,_0x5183e7,_0x39bc4c,_0xd22814);else{for(var _0x4023f0=_0x4a8508[_0xb79bfc(0x18a)]-0x1;_0x4023f0>=0x0;_0x4023f0--)if(_0x10a5fd=_0x4a8508[_0x4023f0])_0x50f6b3=(_0x4feb85<0x3?_0x10a5fd(_0x50f6b3):_0x4feb85>0x3?_0x10a5fd(_0x5183e7,_0x39bc4c,_0x50f6b3):_0x10a5fd(_0x5183e7,_0x39bc4c))||_0x50f6b3;}return _0x4feb85>0x3&&_0x50f6b3&&Object[_0xb79bfc(0x160)](_0x5183e7,_0x39bc4c,_0x50f6b3),_0x50f6b3;},__metadata=this&&this['__metadata']||function(_0x4cc9d7,_0x3e1a44){const _0x6344e3=_0x39bb13;if(typeof Reflect===_0x6344e3(0x161)&&typeof Reflect[_0x6344e3(0x14f)]==='function')return Reflect['metadata'](_0x4cc9d7,_0x3e1a44);},__param=this&&this[_0x39bb13(0x17b)]||function(_0x222ab9,_0x2c28dc){return function(_0x483bfa,_0x18c22a){_0x2c28dc(_0x483bfa,_0x18c22a,_0x222ab9);};};Object[_0x39bb13(0x160)](exports,_0x39bb13(0x16a),{'value':!![]}),exports['BadwordsService']=void 0x0;const globalConfig_service_1=require(_0x39bb13(0x13c)),common_1=require(_0x39bb13(0x12a)),badwords_entity_1=require(_0x39bb13(0x185)),typeorm_1=require(_0x39bb13(0x131)),typeorm_2=require('@nestjs/typeorm'),axios_1=require(_0x39bb13(0x17f)),violationLog_entity_1=require(_0x39bb13(0x14c)),user_entity_1=require(_0x39bb13(0x18f)),utils_1=require(_0x39bb13(0x125));let BadwordsService=class BadwordsService{constructor(_0x46e5c1,_0xab137c,_0x3984c6,_0x51d405){const _0x3f8ce5=_0x39bb13;this[_0x3f8ce5(0x173)]=_0x46e5c1,this[_0x3f8ce5(0x12c)]=_0xab137c,this[_0x3f8ce5(0x16e)]=_0x3984c6,this['globalConfigService']=_0x51d405,this[_0x3f8ce5(0x18e)]=[];}async[_0x39bb13(0x181)](){this['loadBadWords']();}async[_0x39bb13(0x175)](_0x47038e,_0x53ac5c){const _0x30b15c=_0x39bb13,_0x87a233=[];for(let _0x1da58b=0x0;_0x1da58b<this[_0x30b15c(0x18e)][_0x30b15c(0x18a)];_0x1da58b++){const _0x1dd831=this['badWords'][_0x1da58b];_0x47038e['includes'](_0x1dd831)&&_0x87a233[_0x30b15c(0x189)](_0x1dd831);}if(_0x87a233[_0x30b15c(0x18a)]){await this[_0x30b15c(0x180)](_0x53ac5c,_0x47038e,_0x87a233,[_0x30b15c(0x12f)],_0x30b15c(0x17a));const _0x5ac37d=_0x30b15c(0x13a);throw new common_1[(_0x30b15c(0x170))](_0x5ac37d,common_1[_0x30b15c(0x135)][_0x30b15c(0x172)]);}}async['checkBadWords'](_0x1366c7,_0x3eb6e3){const _0x2eb400=_0x39bb13,_0xcf6178=await this[_0x2eb400(0x186)][_0x2eb400(0x142)]();_0xcf6178&&await this[_0x2eb400(0x11f)](_0x1366c7,_0xcf6178,_0x3eb6e3),await this[_0x2eb400(0x175)](_0x1366c7,_0x3eb6e3);}async[_0x39bb13(0x11f)](_0x256f20,_0x52b5b2,_0xe52852){const _0x36a946=_0x39bb13,{useType:_0xc43fed}=_0x52b5b2;_0xc43fed===_0x36a946(0x146)&&await this['baiduCheckBadWords'](_0x256f20,_0x52b5b2['baiduTextAccessToken'],_0xe52852),_0xc43fed===_0x36a946(0x17d)&&await this['nineaiCheckBadWords'](_0x256f20,_0x52b5b2,_0xe52852);}[_0x39bb13(0x144)](_0x57a365){const _0x25e6b6=_0x39bb13,_0x1f01d0=/存在(.*?)不合规/,_0x3872ce=_0x57a365[_0x25e6b6(0x11a)](_0x1f01d0);return _0x3872ce?_0x3872ce[0x1]:'';}async[_0x39bb13(0x11b)](_0x4c9972,_0x206988,_0x3d54d9){const _0x4909a1=_0x39bb13;if(!_0x206988)return;const _0x71248b=_0x4909a1(0x123)+_0x206988+'}',_0x357ea0={'Content-Type':_0x4909a1(0x122),'Accept':_0x4909a1(0x138)},_0x505c69=await axios_1[_0x4909a1(0x141)][_0x4909a1(0x156)](_0x71248b,{'text':_0x4c9972},{'headers':_0x357ea0}),{conclusion:_0x543ace,error_code:_0x6749ea,error_msg:_0x1ef622,conclusionType:_0x1ba42e,data:_0x217ec5}=_0x505c69[_0x4909a1(0x132)];_0x6749ea&&console[_0x4909a1(0x140)](_0x4909a1(0x179),_0x1ef622);if(_0x1ba42e!==0x1){const _0x2120a8=[...new Set(_0x217ec5[_0x4909a1(0x167)](_0x12865c=>this['extractContent'](_0x12865c[_0x4909a1(0x154)])))];await this[_0x4909a1(0x180)](_0x3d54d9,_0x4c9972,['***'],_0x2120a8,_0x4909a1(0x15e));const _0x16b2c8=_0x4909a1(0x188)+_0x2120a8['join'](',')+_0x4909a1(0x147);throw new common_1['HttpException'](_0x16b2c8,common_1['HttpStatus'][_0x4909a1(0x172)]);}}async[_0x39bb13(0x150)](_0x3df320,_0x123ceb,_0x18a363){const _0x3c81d9=_0x39bb13;var _0x4080db;const {nineaiBuiltInSensitiveApiBase:_0x11757f,nineaiBuiltInSensitiveAuthKey:_0x395d07}=_0x123ceb;if(!_0x11757f||!_0x395d07)return;const _0x21000b=await axios_1[_0x3c81d9(0x141)]['post'](_0x11757f,{'content':_0x3df320},{'headers':{'Content-Type':'application/json','Authorization':_0x395d07}});if(!_0x21000b[_0x3c81d9(0x132)])return;if(_0x21000b[_0x3c81d9(0x132)][_0x3c81d9(0x128)]!=='0'){const {msg:msg=_0x3c81d9(0x14e)}=_0x21000b[_0x3c81d9(0x132)];throw new common_1['HttpException'](_0x3c81d9(0x169)+msg,common_1[_0x3c81d9(0x135)]['BAD_REQUEST']);}if(_0x21000b[_0x3c81d9(0x132)]['word_list']&&((_0x4080db=_0x21000b[_0x3c81d9(0x132)][_0x3c81d9(0x16b)])===null||_0x4080db===void 0x0?void 0x0:_0x4080db[_0x3c81d9(0x18a)])){const _0x9a67df=[...new Set(_0x21000b[_0x3c81d9(0x132)]['word_list']['map'](_0x14070a=>_0x14070a[_0x3c81d9(0x187)]))],_0x4aed6c=[...new Set(_0x21000b[_0x3c81d9(0x132)]['word_list'][_0x3c81d9(0x167)](_0xf6ef6f=>_0xf6ef6f[_0x3c81d9(0x136)]))];await this[_0x3c81d9(0x180)](_0x18a363,_0x3df320,_0x9a67df,_0x4aed6c,_0x3c81d9(0x16d));const _0x4a2c3b=this[_0x3c81d9(0x171)](_0x21000b[_0x3c81d9(0x132)]['word_list']);throw new common_1[(_0x3c81d9(0x170))](_0x4a2c3b,common_1[_0x3c81d9(0x135)]['BAD_REQUEST']);}}[_0x39bb13(0x171)](_0x1e56ab){const _0x1d0d4d=_0x39bb13,_0x28303e=_0x1e56ab['map'](_0x5ae0aa=>_0x5ae0aa['category']),_0x33bdc8=[...new Set(_0x28303e)];return _0x1d0d4d(0x13b)+_0x33bdc8[_0x1d0d4d(0x178)](',')+'的信息、我们已对您账号进行标记、请合规使用！';}async['loadBadWords'](){const _0x151b79=_0x39bb13,_0x458c06=await this['badWordsEntity'][_0x151b79(0x18c)]({'where':{'status':0x1},'select':['word']});this[_0x151b79(0x18e)]=_0x458c06[_0x151b79(0x167)](_0x9cd6a5=>_0x9cd6a5['word']);}async[_0x39bb13(0x183)](_0x519513){const _0x2865d6=_0x39bb13,{page:page=0x1,size:size=0x1f4,word:_0x107db0,status:_0x1204ca}=_0x519513,_0x2ac29a={};[0x0,0x1,'0','1']['includes'](_0x1204ca)&&(_0x2ac29a[_0x2865d6(0x152)]=_0x1204ca),_0x107db0&&(_0x2ac29a['word']=(0x0,typeorm_1[_0x2865d6(0x18b)])('%'+_0x107db0+'%'));const [_0x4130df,_0x5b7206]=await this[_0x2865d6(0x173)][_0x2865d6(0x157)]({'where':_0x2ac29a,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x2865d6(0x134)}});return{'rows':_0x4130df,'count':_0x5b7206};}async['delBadWords'](_0x4e022d){const _0x443e1c=_0x39bb13,_0x50bdec=await this[_0x443e1c(0x173)]['findOne']({'where':{'id':_0x4e022d['id']}});if(!_0x50bdec)throw new common_1[(_0x443e1c(0x170))](_0x443e1c(0x151),common_1[_0x443e1c(0x135)][_0x443e1c(0x172)]);const _0x4d67e8=await this['badWordsEntity'][_0x443e1c(0x120)]({'id':_0x4e022d['id']});if(_0x4d67e8[_0x443e1c(0x148)]>0x0)return await this['loadBadWords'](),_0x443e1c(0x124);else throw new common_1[(_0x443e1c(0x170))](_0x443e1c(0x143),common_1['HttpStatus'][_0x443e1c(0x172)]);}async[_0x39bb13(0x130)](_0x399474){const _0x5f105a=_0x39bb13,{id:_0x4ae700,word:_0x24675d,status:_0x139142}=_0x399474,_0x5019b6=await this[_0x5f105a(0x173)][_0x5f105a(0x15b)]({'where':{'word':_0x24675d}});if(_0x5019b6)throw new common_1[(_0x5f105a(0x170))](_0x5f105a(0x11e),common_1[_0x5f105a(0x135)][_0x5f105a(0x172)]);const _0x40944e=await this[_0x5f105a(0x173)]['update']({'id':_0x4ae700},{'word':_0x24675d,'status':_0x139142});if(_0x40944e[_0x5f105a(0x148)]>0x0)return await this[_0x5f105a(0x129)](),_0x5f105a(0x133);else throw new common_1[(_0x5f105a(0x170))](_0x5f105a(0x18d),common_1[_0x5f105a(0x135)]['BAD_REQUEST']);}async[_0x39bb13(0x174)](_0x92bf61){const _0x19cbb0=_0x39bb13,{word:_0x1bc58d}=_0x92bf61,_0x343305=await this[_0x19cbb0(0x173)][_0x19cbb0(0x15b)]({'where':{'word':_0x1bc58d}});if(_0x343305)throw new common_1[(_0x19cbb0(0x170))](_0x19cbb0(0x155),common_1['HttpStatus']['BAD_REQUEST']);return await this[_0x19cbb0(0x173)][_0x19cbb0(0x13f)]({'word':_0x1bc58d}),await this['loadBadWords'](),_0x19cbb0(0x168);}async[_0x39bb13(0x180)](_0x348653,_0x532902,_0x3913a0,_0x5129e2,_0x26e1a8){const _0x4d0682=_0x39bb13,_0x3a3366={'userId':_0x348653,'content':_0x532902,'words':JSON[_0x4d0682(0x14b)](_0x3913a0),'typeCn':JSON[_0x4d0682(0x14b)](_0x5129e2),'typeOriginCn':_0x26e1a8};try{await this[_0x4d0682(0x16e)][_0x4d0682(0x149)]()[_0x4d0682(0x16f)](user_entity_1['UserEntity'])[_0x4d0682(0x126)]({'violationCount':()=>_0x4d0682(0x158)})['where'](_0x4d0682(0x176),{'userId':_0x348653})[_0x4d0682(0x12d)](),await this['violationLogEntity']['save'](_0x3a3366);}catch(_0x47f6c4){console[_0x4d0682(0x140)](_0x4d0682(0x14a),_0x47f6c4);}}async[_0x39bb13(0x15f)](_0xc12a3,_0x274232){const _0x11ca81=_0x39bb13,{role:_0x5668fe}=_0xc12a3[_0x11ca81(0x166)],{page:page=0x1,size:size=0xa,userId:_0x406274,typeOriginCn:_0x21256d}=_0x274232,_0x262960={};_0x406274&&(_0x262960[_0x11ca81(0x127)]=_0x406274),_0x21256d&&(_0x262960[_0x11ca81(0x177)]=_0x21256d);const [_0x8e4e84,_0x4f0ec6]=await this['violationLogEntity'][_0x11ca81(0x157)]({'where':_0x262960,'skip':(page-0x1)*size,'take':size,'order':{'id':_0x11ca81(0x13d)}}),_0x3a18e0=[...new Set(_0x8e4e84[_0x11ca81(0x167)](_0x29fe62=>_0x29fe62[_0x11ca81(0x127)]))],_0x5dd461=await this[_0x11ca81(0x16e)][_0x11ca81(0x18c)]({'where':{'id':(0x0,typeorm_1['In'])(_0x3a18e0)},'select':['id',_0x11ca81(0x145),'username','email','violationCount',_0x11ca81(0x152)]});return _0x8e4e84[_0x11ca81(0x17e)](_0x319b3e=>{const _0x1c0956=_0x11ca81,_0x3567b1=_0x5dd461[_0x1c0956(0x18c)](_0x5b2104=>_0x5b2104['id']===_0x319b3e[_0x1c0956(0x127)]);_0x5668fe!==_0x1c0956(0x15d)&&(_0x3567b1[_0x1c0956(0x165)]=(0x0,utils_1[_0x1c0956(0x13e)])(_0x3567b1['email'])),_0x319b3e[_0x1c0956(0x162)]=_0x3567b1;}),{'rows':_0x8e4e84,'count':_0x4f0ec6};}};BadwordsService=__decorate([(0x0,common_1[_0x39bb13(0x16c)])(),__param(0x0,(0x0,typeorm_2[_0x39bb13(0x15a)])(badwords_entity_1['BadWordsEntity'])),__param(0x1,(0x0,typeorm_2[_0x39bb13(0x15a)])(violationLog_entity_1['ViolationLogEntity'])),__param(0x2,(0x0,typeorm_2[_0x39bb13(0x15a)])(user_entity_1[_0x39bb13(0x163)])),__metadata('design:paramtypes',[typeorm_1[_0x39bb13(0x12b)],typeorm_1[_0x39bb13(0x12b)],typeorm_1['Repository'],globalConfig_service_1[_0x39bb13(0x15c)]])],BadwordsService),exports['BadwordsService']=BadwordsService;