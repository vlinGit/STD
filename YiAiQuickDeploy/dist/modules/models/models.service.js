'use strict';const _0x3a0079=_0x5430;(function(_0x48f9e5,_0x1e3414){const _0x4c3636=_0x5430,_0x1a0766=_0x48f9e5();while(!![]){try{const _0x110cdf=-parseInt(_0x4c3636(0xc1))/0x1+-parseInt(_0x4c3636(0xe6))/0x2*(-parseInt(_0x4c3636(0xba))/0x3)+-parseInt(_0x4c3636(0xd2))/0x4*(parseInt(_0x4c3636(0xb3))/0x5)+parseInt(_0x4c3636(0x8d))/0x6*(parseInt(_0x4c3636(0xe4))/0x7)+parseInt(_0x4c3636(0xad))/0x8+parseInt(_0x4c3636(0xd7))/0x9*(-parseInt(_0x4c3636(0x98))/0xa)+parseInt(_0x4c3636(0xd6))/0xb;if(_0x110cdf===_0x1e3414)break;else _0x1a0766['push'](_0x1a0766['shift']());}catch(_0xef26c6){_0x1a0766['push'](_0x1a0766['shift']());}}}(_0x4ede,0xa7e34));var __decorate=this&&this[_0x3a0079(0xaa)]||function(_0x5b5946,_0x1091c1,_0x206c44,_0x2fca1f){const _0x45c8b3=_0x3a0079;var _0x328a5a=arguments[_0x45c8b3(0xe1)],_0x22760e=_0x328a5a<0x3?_0x1091c1:_0x2fca1f===null?_0x2fca1f=Object[_0x45c8b3(0xe5)](_0x1091c1,_0x206c44):_0x2fca1f,_0xfb5d42;if(typeof Reflect===_0x45c8b3(0x93)&&typeof Reflect['decorate']===_0x45c8b3(0xa5))_0x22760e=Reflect[_0x45c8b3(0xd5)](_0x5b5946,_0x1091c1,_0x206c44,_0x2fca1f);else{for(var _0x56fcee=_0x5b5946['length']-0x1;_0x56fcee>=0x0;_0x56fcee--)if(_0xfb5d42=_0x5b5946[_0x56fcee])_0x22760e=(_0x328a5a<0x3?_0xfb5d42(_0x22760e):_0x328a5a>0x3?_0xfb5d42(_0x1091c1,_0x206c44,_0x22760e):_0xfb5d42(_0x1091c1,_0x206c44))||_0x22760e;}return _0x328a5a>0x3&&_0x22760e&&Object[_0x45c8b3(0xcd)](_0x1091c1,_0x206c44,_0x22760e),_0x22760e;},__metadata=this&&this[_0x3a0079(0xe7)]||function(_0x6ca5c8,_0x43e402){const _0x382ff7=_0x3a0079;if(typeof Reflect===_0x382ff7(0x93)&&typeof Reflect[_0x382ff7(0xb9)]==='function')return Reflect['metadata'](_0x6ca5c8,_0x43e402);},__param=this&&this[_0x3a0079(0x8e)]||function(_0x5dc275,_0x107509){return function(_0x984e20,_0x4581e3){_0x107509(_0x984e20,_0x4581e3,_0x5dc275);};};Object[_0x3a0079(0xcd)](exports,_0x3a0079(0xbc),{'value':!![]}),exports[_0x3a0079(0xde)]=void 0x0;const common_1=require(_0x3a0079(0x8b)),typeorm_1=require(_0x3a0079(0xe9)),typeorm_2=require(_0x3a0079(0x92)),models_entity_1=require('./models.entity'),status_constant_1=require('../../common/constants/status.constant'),utils_1=require(_0x3a0079(0xc8)),modelType_entity_1=require(_0x3a0079(0xc2));function _0x4ede(){const _0x2c0e80=['当前未指定特殊模型KEY、前往后台模型池设置吧！','values','metadata','3MCGjKA','find','__esModule','queryModelType','\x20欠费或被官方封禁导致不可用，已被系统自动锁定','Repository','model','269290taAcjb','./modelType.entity','error','hideString','Injectable','from','当前调用模型已经被移除、请重新选择模型！','../../common/utils','id\x20=\x20:id','status','keyType','key','defineProperty','initCalcKey','Like','delModel','parse','572ushfuf','secret','findOne','decorate','6112590nuTvrS','171lMLZPq','sort','user','keys','modelMaps','set','getRandomItemFromArray','ModelsService','getCurrentModelKeyInfo','createQueryBuilder','length','ASC','lockKey','3514Imflbd','getOwnPropertyDescriptor','2584334RkNdDQ','__metadata','useToken\x20+\x20','@nestjs/typeorm','setModel','getRandomDrawKey','InjectRepository','ModelsMapCn','update','@nestjs/common','key:\x20','4542mrSqZW','__param','HttpException','keyPoolMap','delModelType','typeorm','object','findAndCount','save','keyStatus','modelsList','425830bPNqgP','reduce','where','stringify','ModelsTypeEntity','BAD_REQUEST','缺失必要参数！','modelTypes','Logger','modelsEntity','useCount\x20+\x201','error:\x20','modelOrder','function','keyPoolIndexMap','saveUseLog','getBaseConfig','keyList','__decorate','HttpStatus','design:paramtypes','4582152rBqNNw','onModuleInit','push','execute','ModelsEntity','forEach','36175MnBJEr','map','log','getAllKey'];_0x4ede=function(){return _0x2c0e80;};return _0x4ede();}function _0x5430(_0x4bcadc,_0x4250c){const _0x4ede5c=_0x4ede();return _0x5430=function(_0x543009,_0x206555){_0x543009=_0x543009-0x8a;let _0x3c5a2e=_0x4ede5c[_0x543009];return _0x3c5a2e;},_0x5430(_0x4bcadc,_0x4250c);}let ModelsService=class ModelsService{constructor(_0x402b77,_0x1c35fb){const _0x1210d6=_0x3a0079;this[_0x1210d6(0xa1)]=_0x402b77,this['modelsTypeEntity']=_0x1c35fb,this[_0x1210d6(0x9f)]=[],this['modelMaps']={},this[_0x1210d6(0xa9)]={},this['keyPoolMap']={},this[_0x1210d6(0xa6)]={};}async[_0x3a0079(0xae)](){const _0x2fbe54=_0x3a0079;await this[_0x2fbe54(0xce)]();}async[_0x3a0079(0xce)](){const _0x8d8f8c=_0x3a0079;this['keyPoolMap']={},this[_0x8d8f8c(0xa6)]={},this['keyList']={},this[_0x8d8f8c(0xdb)]={},this[_0x8d8f8c(0x9f)]=[];const _0x3b5314=await this[_0x8d8f8c(0xa1)][_0x8d8f8c(0xbb)]({'where':{'status':!![]}}),_0x48c8db=_0x3b5314[_0x8d8f8c(0x99)]((_0x1763e3,_0x2d61a8)=>{const _0x1d8826=_0x8d8f8c;return!_0x1763e3[_0x2d61a8['keyType']]?_0x1763e3[_0x2d61a8[_0x1d8826(0xcb)]]=[_0x2d61a8]:_0x1763e3[_0x2d61a8[_0x1d8826(0xcb)]]['push'](_0x2d61a8),_0x1763e3;},{});this[_0x8d8f8c(0x9f)]=Object[_0x8d8f8c(0xda)](_0x48c8db)[_0x8d8f8c(0xb4)](_0x379536=>{const _0x9e4d21=_0x8d8f8c;return{'label':status_constant_1[_0x9e4d21(0xed)][_0x379536],'val':_0x379536};}),this[_0x8d8f8c(0xdb)]=_0x48c8db,this[_0x8d8f8c(0xa9)]={},_0x3b5314[_0x8d8f8c(0xb2)](_0x1b269d=>{const _0x1047f5=_0x8d8f8c,{keyType:_0x34ee0d,model:_0x49336a,keyWeight:_0x4aa1b7}=_0x1b269d;if(!this[_0x1047f5(0x90)][_0x49336a])this[_0x1047f5(0x90)][_0x49336a]=[];for(let _0x351938=0x0;_0x351938<_0x4aa1b7;_0x351938++){this[_0x1047f5(0x90)][_0x49336a]['push'](_0x1b269d);}if(!this[_0x1047f5(0xa6)][_0x49336a])this['keyPoolIndexMap'][_0x49336a]=0x0;if(!this['keyList'][_0x34ee0d])this[_0x1047f5(0xa9)][_0x34ee0d]={};if(!this[_0x1047f5(0xa9)][_0x34ee0d][_0x49336a])this[_0x1047f5(0xa9)][_0x34ee0d][_0x49336a]=[];this[_0x1047f5(0xa9)][_0x34ee0d][_0x49336a][_0x1047f5(0xaf)](_0x1b269d);});}async[_0x3a0079(0xe3)](_0x12a065,_0x4439ea,_0x46effa=-0x1){const _0x1e9298=_0x3a0079,_0x1aafeb=await this[_0x1e9298(0xa1)][_0x1e9298(0x8a)]({'id':_0x12a065},{'status':![],'keyStatus':_0x46effa,'remark':_0x4439ea});common_1[_0x1e9298(0xa0)][_0x1e9298(0xc3)](_0x1e9298(0x8c)+_0x12a065+_0x1e9298(0xbe)),this['initCalcKey']();}async[_0x3a0079(0xdf)](_0x45a23c){const _0x2deea1=_0x3a0079;if(!this[_0x2deea1(0x90)][_0x45a23c])throw new common_1['HttpException'](_0x2deea1(0xc7),common_1[_0x2deea1(0xab)]['BAD_REQUEST']);this['keyPoolIndexMap'][_0x45a23c]++;const _0x5b519d=this[_0x2deea1(0xa6)][_0x45a23c];if(_0x5b519d>=this[_0x2deea1(0x90)][_0x45a23c][_0x2deea1(0xe1)])this[_0x2deea1(0xa6)][_0x45a23c]=0x0;const _0xa7ece4=this[_0x2deea1(0x90)][_0x45a23c][this[_0x2deea1(0xa6)][_0x45a23c]];return _0xa7ece4;}async[_0x3a0079(0xa8)](_0x49ac3f){const _0x335c50=_0x3a0079;if(!this[_0x335c50(0x9f)][_0x335c50(0xe1)]||!Object[_0x335c50(0xda)](this[_0x335c50(0xdb)])['length'])return;const _0x291bd3=_0x49ac3f?this[_0x335c50(0x9f)][_0x335c50(0xbb)](_0x5940fe=>Number(_0x5940fe['val'])===0x1):this[_0x335c50(0x9f)][0x0];if(!_0x291bd3)return;const {keyType:_0x3ecb41,modelName:_0x15a1eb,model:_0x157b05,maxModelTokens:_0x2c522b,maxResponseTokens:_0x1ac702,deductType:_0x1407e4,deduct:_0x104faa,maxRounds:_0x4d8a55}=this[_0x335c50(0xdb)][_0x291bd3['val']][0x0];return{'modelTypeInfo':_0x291bd3,'modelInfo':{'keyType':_0x3ecb41,'modelName':_0x15a1eb,'model':_0x157b05,'maxModelTokens':_0x2c522b,'maxResponseTokens':_0x1ac702,'topN':0.8,'systemMessage':'','deductType':_0x1407e4,'deduct':_0x104faa,'maxRounds':_0x4d8a55,'rounds':0x8}};}async[_0x3a0079(0xea)](_0x4658ca){const _0x3c3015=_0x3a0079;try{const {id:_0x3165dc}=_0x4658ca;_0x4658ca[_0x3c3015(0xca)]&&(_0x4658ca[_0x3c3015(0x96)]=0x1);if(_0x3165dc){const _0x22b824=await this[_0x3c3015(0xa1)]['update']({'id':_0x3165dc},_0x4658ca);return await this['initCalcKey'](),_0x22b824['affected']>0x0;}else{const {keyType:_0x1aab45,key:_0x315608}=_0x4658ca;if(Number(_0x1aab45!==0x1)){const _0x18076d=await this['modelsEntity'][_0x3c3015(0x95)](_0x4658ca);return await this[_0x3c3015(0xce)](),_0x18076d;}else{const _0x6fa7d1=_0x315608[_0x3c3015(0xb4)](_0x60fb79=>{const _0x2426d4=_0x3c3015;try{const _0x1f515c=JSON[_0x2426d4(0xd1)](JSON['stringify'](_0x4658ca));return _0x1f515c[_0x2426d4(0xcc)]=_0x60fb79,_0x1f515c;}catch(_0x39c59e){console[_0x2426d4(0xb5)]('parse\x20error:\x20',_0x39c59e);}}),_0xca4075=await this[_0x3c3015(0xa1)][_0x3c3015(0x95)](_0x6fa7d1);return await this[_0x3c3015(0xce)](),_0xca4075;}}}catch(_0x5df467){console['log'](_0x3c3015(0xa3),_0x5df467);}}async[_0x3a0079(0xd0)]({id:_0x7b4c1c}){const _0x4a2e99=_0x3a0079;if(!_0x7b4c1c)throw new common_1['HttpException'](_0x4a2e99(0x9e),common_1[_0x4a2e99(0xab)][_0x4a2e99(0x9d)]);const _0x1a6071=await this[_0x4a2e99(0xa1)][_0x4a2e99(0xd4)]({'where':{'id':_0x7b4c1c}});if(!_0x1a6071)throw new common_1[(_0x4a2e99(0x8f))]('当前账号不存在！',common_1[_0x4a2e99(0xab)][_0x4a2e99(0x9d)]);const _0x119c7a=await this[_0x4a2e99(0xa1)]['delete']({'id':_0x7b4c1c});return await this[_0x4a2e99(0xce)](),_0x119c7a;}async['queryModels'](_0x13f70d,_0x5cea98){const _0x3080ce=_0x3a0079,{role:_0xdf1edb}=_0x13f70d[_0x3080ce(0xd9)],{keyType:_0x9c6888,key:_0x5330eb,status:_0x386d33,model:_0x2b51b3,page:page=0x1,size:size=0xa}=_0x5cea98;let _0x30d496={};_0x9c6888&&(_0x30d496[_0x3080ce(0xcb)]=_0x9c6888),_0x2b51b3&&(_0x30d496[_0x3080ce(0xc0)]=_0x2b51b3),_0x386d33&&(_0x30d496[_0x3080ce(0xca)]=Number(_0x386d33)===0x1?!![]:![]),_0x5330eb&&(_0x30d496['key']=(0x0,typeorm_2[_0x3080ce(0xcf)])('%'+_0x5330eb+'%'));const [_0x12ce91,_0x211fa3]=await this[_0x3080ce(0xa1)][_0x3080ce(0x94)]({'where':_0x30d496,'order':{'modelOrder':_0x3080ce(0xe2)},'skip':(page-0x1)*size,'take':size});return _0xdf1edb!=='super'&&_0x12ce91[_0x3080ce(0xb2)](_0x1fc43a=>{const _0x243b07=_0x3080ce;_0x1fc43a[_0x243b07(0xcc)]&&(_0x1fc43a[_0x243b07(0xcc)]=(0x0,utils_1['hideString'])(_0x1fc43a[_0x243b07(0xcc)])),_0x1fc43a[_0x243b07(0xd3)]&&(_0x1fc43a[_0x243b07(0xd3)]=(0x0,utils_1[_0x243b07(0xc4)])(_0x1fc43a[_0x243b07(0xd3)]));}),{'rows':_0x12ce91,'count':_0x211fa3};}async[_0x3a0079(0x97)](){const _0x1d92ef=_0x3a0079,_0x440a19=JSON[_0x1d92ef(0xd1)](JSON[_0x1d92ef(0x9b)](this[_0x1d92ef(0xdb)]));return Object[_0x1d92ef(0xda)](_0x440a19)['forEach'](_0x3b5a81=>{const _0x390967=_0x1d92ef;_0x440a19[_0x3b5a81]=_0x440a19[_0x3b5a81][_0x390967(0xd8)]((_0x46b85c,_0x235054)=>_0x46b85c[_0x390967(0xa4)]-_0x235054[_0x390967(0xa4)]),_0x440a19[_0x3b5a81]=Array[_0x390967(0xc6)](_0x440a19[_0x3b5a81][_0x390967(0xb4)](_0x3c5126=>{const {modelName:_0x4e189c,model:_0x9a061b,deduct:_0x4c9d16,deductType:_0x1769da,maxRounds:_0x14a301}=_0x3c5126;return{'modelName':_0x4e189c,'model':_0x9a061b,'deduct':_0x4c9d16,'deductType':_0x1769da,'maxRounds':_0x14a301};})['reduce']((_0x460e80,_0x4d3920)=>_0x460e80[_0x390967(0xdc)](_0x4d3920['modelName'],_0x4d3920),new Map())[_0x390967(0xb8)]());}),{'modelTypeList':this[_0x1d92ef(0x9f)],'modelMaps':_0x440a19};}async[_0x3a0079(0xa7)](_0x2a528c,_0x4306ba){const _0x4b2653=_0x3a0079;await this[_0x4b2653(0xa1)][_0x4b2653(0xe0)]()['update'](models_entity_1[_0x4b2653(0xb1)])['set']({'useCount':()=>_0x4b2653(0xa2),'useToken':()=>_0x4b2653(0xe8)+_0x4306ba})[_0x4b2653(0x9a)](_0x4b2653(0xc9),{'id':_0x2a528c})[_0x4b2653(0xb0)]();}async[_0x3a0079(0xeb)](){const _0x484c0e=_0x3a0079,_0x1fbaa2=await this[_0x484c0e(0xa1)][_0x484c0e(0xbb)]({'where':{'isDraw':!![],'status':!![]}});if(!_0x1fbaa2[_0x484c0e(0xe1)])throw new common_1['HttpException'](_0x484c0e(0xb7),common_1['HttpStatus'][_0x484c0e(0x9d)]);return(0x0,utils_1[_0x484c0e(0xdd)])(_0x1fbaa2);}async[_0x3a0079(0xb6)](){const _0x452adc=_0x3a0079;return await this[_0x452adc(0xa1)][_0x452adc(0xbb)]();}async[_0x3a0079(0xbd)](_0x31281){return 0x1;}async['setModelType'](_0x188b67){return 0x1;}async[_0x3a0079(0x91)](_0x875d16){return 0x1;}};ModelsService=__decorate([(0x0,common_1[_0x3a0079(0xc5)])(),__param(0x0,(0x0,typeorm_1[_0x3a0079(0xec)])(models_entity_1[_0x3a0079(0xb1)])),__param(0x1,(0x0,typeorm_1[_0x3a0079(0xec)])(modelType_entity_1[_0x3a0079(0x9c)])),__metadata(_0x3a0079(0xac),[typeorm_2[_0x3a0079(0xbf)],typeorm_2[_0x3a0079(0xbf)]])],ModelsService),exports['ModelsService']=ModelsService;