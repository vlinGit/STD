'use strict';function _0x1b8c(){const _0x109bd0=['105029rUPkqm','REDIS_CLIENT','__esModule','redisClient','test','set','invalidateTokens','BAD_REQUEST','del','900594DlDhPE','length','RedisCacheService','aaa','super','metadata','1614879VBlSml','HttpStatus','function','您已在其他设备覆盖登录、请您重新登录！','Inject','__metadata','get','976992Psnibv','user','Injectable','includes','ttl','checkTokenAuth','__param','design:paramtypes','defineProperty','decorate','object','1569016yAfCFG','3267700FZShLT','getOwnPropertyDescriptor','2BZBJSI','expire','zRange','visitor','token:','500936NwTNcs'];_0x1b8c=function(){return _0x109bd0;};return _0x1b8c();}const _0x232393=_0xcc01;(function(_0x531df1,_0x520ade){const _0x16d421=_0xcc01,_0xd0ec3d=_0x531df1();while(!![]){try{const _0x44007e=-parseInt(_0x16d421(0x1b9))/0x1*(parseInt(_0x16d421(0x1b3))/0x2)+parseInt(_0x16d421(0x1a5))/0x3+-parseInt(_0x16d421(0x1b0))/0x4+parseInt(_0x16d421(0x1b1))/0x5+parseInt(_0x16d421(0x1c2))/0x6+-parseInt(_0x16d421(0x1c8))/0x7+-parseInt(_0x16d421(0x1b8))/0x8;if(_0x44007e===_0x520ade)break;else _0xd0ec3d['push'](_0xd0ec3d['shift']());}catch(_0x55380e){_0xd0ec3d['push'](_0xd0ec3d['shift']());}}}(_0x1b8c,0x52b12));var __decorate=this&&this['__decorate']||function(_0x3b7bc2,_0x40ae56,_0x24b90f,_0x3e9067){const _0x726e04=_0xcc01;var _0x579a6d=arguments[_0x726e04(0x1c3)],_0x3a6134=_0x579a6d<0x3?_0x40ae56:_0x3e9067===null?_0x3e9067=Object[_0x726e04(0x1b2)](_0x40ae56,_0x24b90f):_0x3e9067,_0x5d3731;if(typeof Reflect===_0x726e04(0x1af)&&typeof Reflect[_0x726e04(0x1ae)]===_0x726e04(0x1a0))_0x3a6134=Reflect[_0x726e04(0x1ae)](_0x3b7bc2,_0x40ae56,_0x24b90f,_0x3e9067);else{for(var _0x28feac=_0x3b7bc2[_0x726e04(0x1c3)]-0x1;_0x28feac>=0x0;_0x28feac--)if(_0x5d3731=_0x3b7bc2[_0x28feac])_0x3a6134=(_0x579a6d<0x3?_0x5d3731(_0x3a6134):_0x579a6d>0x3?_0x5d3731(_0x40ae56,_0x24b90f,_0x3a6134):_0x5d3731(_0x40ae56,_0x24b90f))||_0x3a6134;}return _0x579a6d>0x3&&_0x3a6134&&Object['defineProperty'](_0x40ae56,_0x24b90f,_0x3a6134),_0x3a6134;},__metadata=this&&this[_0x232393(0x1a3)]||function(_0x558629,_0x233794){const _0x1a99e6=_0x232393;if(typeof Reflect===_0x1a99e6(0x1af)&&typeof Reflect[_0x1a99e6(0x1c7)]==='function')return Reflect[_0x1a99e6(0x1c7)](_0x558629,_0x233794);},__param=this&&this[_0x232393(0x1ab)]||function(_0x24d9f1,_0x58d96c){return function(_0x2acd1b,_0x1dcb06){_0x58d96c(_0x2acd1b,_0x1dcb06,_0x24d9f1);};};function _0xcc01(_0x1a28df,_0x4e6453){const _0x1b8cbc=_0x1b8c();return _0xcc01=function(_0xcc0115,_0x1904f9){_0xcc0115=_0xcc0115-0x19f;let _0x36f071=_0x1b8cbc[_0xcc0115];return _0x36f071;},_0xcc01(_0x1a28df,_0x4e6453);}Object[_0x232393(0x1ad)](exports,_0x232393(0x1bb),{'value':!![]}),exports[_0x232393(0x1c4)]=void 0x0;const common_1=require('@nestjs/common');let RedisCacheService=class RedisCacheService{constructor(_0x3fd66e){const _0x170b55=_0x232393;this[_0x170b55(0x1bc)]=_0x3fd66e;}async['onModuleInit'](){}[_0x232393(0x1bd)](){const _0x135d63=_0x232393;return this['redisClient'][_0x135d63(0x1be)](_0x135d63(0x1c5),0x6f),0x1;}async[_0x232393(0x1a4)](_0x14953f){const _0x232213=_0x232393,{key:_0x51b7bb}=_0x14953f,_0xdf581a=await this[_0x232213(0x1bc)]['get'](_0x51b7bb);return await this[_0x232213(0x1bc)][_0x232213(0x1a4)](_0x51b7bb);}async[_0x232393(0x1be)](_0x38e76e,_0x4aa58c){const _0x2c635d=_0x232393;try{const {key:_0x2fdfc3,val:_0x5460ae}=_0x38e76e;await this[_0x2c635d(0x1bc)][_0x2c635d(0x1be)](_0x2fdfc3,_0x5460ae),_0x4aa58c&&await this['redisClient'][_0x2c635d(0x1b4)](_0x2fdfc3,_0x4aa58c);return;}catch(_0x1ef26b){throw new common_1['HttpException'](_0x1ef26b,common_1[_0x2c635d(0x19f)][_0x2c635d(0x1c0)]);}}async[_0x232393(0x1a9)](_0x4ca32f){const _0xcd3495=_0x232393;return await this[_0xcd3495(0x1bc)]['ttl'](_0x4ca32f);}async[_0x232393(0x1c1)](_0x125d20){const _0xcfde04=_0x232393,{key:_0x4dd3af}=_0x125d20;await this[_0xcfde04(0x1bc)][_0xcfde04(0x1c1)](_0x4dd3af);return;}async['saveToken'](_0x5916cc,_0x166314){const _0x11a1d6=_0x232393,_0x580600=await this[_0x11a1d6(0x1bc)][_0x11a1d6(0x1b5)]('tokens:'+_0x5916cc,0x0,-0x1);await this[_0x11a1d6(0x1bf)](_0x5916cc,_0x580600),this[_0x11a1d6(0x1bc)][_0x11a1d6(0x1be)]('token:'+_0x5916cc,_0x166314);}async[_0x232393(0x1bf)](_0x49f239,_0x1fac9a){_0x1fac9a['forEach'](_0x278530=>{const _0xb3d04c=_0xcc01;this[_0xb3d04c(0x1bc)]['del']('token:'+_0x49f239+':'+_0x278530);});}async[_0x232393(0x1aa)](_0x4694fb,_0x29ba10){const _0x369bc1=_0x232393,{id:_0x1fefee,role:_0x2fef18}=_0x29ba10[_0x369bc1(0x1a6)];if(_0x2fef18===_0x369bc1(0x1b6))return!![];const _0xfa3cd1=await this[_0x369bc1(0x1bc)][_0x369bc1(0x1a4)](_0x369bc1(0x1b7)+_0x1fefee);if(_0xfa3cd1===null)return await this[_0x369bc1(0x1bc)][_0x369bc1(0x1be)](_0x369bc1(0x1b7)+_0x1fefee,_0x4694fb),!![];if(_0xfa3cd1!==_0x4694fb){if([_0x369bc1(0x1c6),'admin'][_0x369bc1(0x1a8)](_0x2fef18))return!![];throw new common_1['HttpException'](_0x369bc1(0x1a1),common_1[_0x369bc1(0x19f)]['UNAUTHORIZED']);}}};RedisCacheService=__decorate([(0x0,common_1[_0x232393(0x1a7)])(),__param(0x0,(0x0,common_1[_0x232393(0x1a2)])(_0x232393(0x1ba))),__metadata(_0x232393(0x1ac),[Object])],RedisCacheService),exports[_0x232393(0x1c4)]=RedisCacheService;