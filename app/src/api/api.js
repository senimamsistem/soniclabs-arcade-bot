const a1_0x59433=a1_0x54c2;(function(_0x5836b8,_0x3dc9de){const _0x5b5fb6=a1_0x54c2,_0x4a1f86=_0x5836b8();while(!![]){try{const _0x166e65=-parseInt(_0x5b5fb6(0xc1))/0x1*(-parseInt(_0x5b5fb6(0xe3))/0x2)+parseInt(_0x5b5fb6(0xc2))/0x3+parseInt(_0x5b5fb6(0xbe))/0x4+-parseInt(_0x5b5fb6(0xd2))/0x5*(parseInt(_0x5b5fb6(0xb9))/0x6)+parseInt(_0x5b5fb6(0xe4))/0x7*(-parseInt(_0x5b5fb6(0xca))/0x8)+parseInt(_0x5b5fb6(0xd4))/0x9*(parseInt(_0x5b5fb6(0xd8))/0xa)+-parseInt(_0x5b5fb6(0xdc))/0xb;if(_0x166e65===_0x3dc9de)break;else _0x4a1f86['push'](_0x4a1f86['shift']());}catch(_0x33a0d7){_0x4a1f86['push'](_0x4a1f86['shift']());}}}(a1_0x419f,0xda565));import{Helper}from'../utils/helper.js';import a1_0x31ce6d from'../utils/logger.js';import a1_0x517ebe from'node-fetch';import{HttpsProxyAgent}from'https-proxy-agent';function a1_0x54c2(_0x141041,_0x18bb6b){const _0x419f15=a1_0x419f();return a1_0x54c2=function(_0x54c21c,_0x572800){_0x54c21c=_0x54c21c-0xb4;let _0x1750bf=_0x419f15[_0x54c21c];return _0x1750bf;},a1_0x54c2(_0x141041,_0x18bb6b);}export class API{constructor(_0x289f48,_0x5211b5,_0x60caab,_0x3ce4db,_0x27545f){const _0xebcd5a=a1_0x54c2;this[_0xebcd5a(0xb8)]=_0x289f48,this[_0xebcd5a(0xc0)]=_0x60caab,this['origin']=_0x3ce4db,this['ua']=Helper[_0xebcd5a(0xd7)](),this['something']=_0x27545f,this[_0xebcd5a(0xcb)]=_0x5211b5;}['generateHeaders'](_0x2996e5){const _0x213ca6=a1_0x54c2,_0x1962b3={'Accept':_0x213ca6(0xc8),'Accept-Language':_0x213ca6(0xdf),'Content-Type':'application/json','Sec-Fetch-Dest':_0x213ca6(0xbd),'Sec-Fetch-Site':_0x213ca6(0xc9),'Sec-Fetch-Mode':'cors','Cache-Control':'no-cache','Connection':'keep-alive','Pragma':'no-cache'};return _0x2996e5&&(_0x1962b3[_0x213ca6(0xd1)]=_0x213ca6(0xb5)+_0x2996e5),_0x1962b3;}[a1_0x59433(0xdb)](_0x5ad712){const _0x1e0a30=a1_0x59433;if(typeof this[_0x1e0a30(0xc7)]===_0x1e0a30(0xe7)){const _0x416c1f=new RegExp(this[_0x1e0a30(0xc7)],'g');return _0x5ad712[_0x1e0a30(0xe1)](_0x416c1f,_0x1e0a30(0xe2));}else Array[_0x1e0a30(0xda)](this['something'])&&this[_0x1e0a30(0xc7)][_0x1e0a30(0xce)](_0xf806d9=>{const _0x26d5e1=_0x1e0a30,_0x2e297f=new RegExp(_0xf806d9,'g');_0x5ad712=_0x5ad712[_0x26d5e1(0xe1)](_0x2e297f,'?????');});return _0x5ad712;}async[a1_0x59433(0xd3)](_0x200c3b,_0x501e76,_0x59a136,_0x55c4de={},_0xe07ee6={},_0x464208,_0x5b5139=![]){const _0xe9ef34=a1_0x59433,_0xf67b91=_0x5b5139?_0x200c3b:''+this[_0xe9ef34(0xb8)]+_0x200c3b;try{const _0x3ee8c1={...this[_0xe9ef34(0xd0)](_0x59a136),..._0xe07ee6},_0x9f04f3={'headers':_0x3ee8c1,'method':_0x501e76,'referer':_0x464208,'referrerPolicy':_0xe9ef34(0xcc),'mode':_0xe9ef34(0xe0),'credentials':'omit'};a1_0x31ce6d[_0xe9ef34(0xd5)](_0x501e76+'\x20:\x20'+this[_0xe9ef34(0xdb)](_0xf67b91)+'\x20'+(this['proxy']?this['proxy']:''));const _0x12e018=_0x3ee8c1;for(let _0x5a482d in _0x12e018){_0x12e018[_0x5a482d]=this[_0xe9ef34(0xdb)](_0x12e018[_0x5a482d]);}a1_0x31ce6d[_0xe9ef34(0xd5)](_0xe9ef34(0xb4)+JSON[_0xe9ef34(0xc4)](_0x12e018));if(_0x501e76!==_0xe9ef34(0xd6)){_0x9f04f3['body']=''+JSON['stringify'](_0x55c4de);const _0x5e7133=this[_0xe9ef34(0xdb)](_0x9f04f3[_0xe9ef34(0xbf)]);a1_0x31ce6d[_0xe9ef34(0xd5)](_0xe9ef34(0xe6)+_0x5e7133);}this[_0xe9ef34(0xcb)]&&(_0x9f04f3[_0xe9ef34(0xb6)]=new HttpsProxyAgent(this[_0xe9ef34(0xcb)],{'rejectUnauthorized':![]}));const _0x169dd2=await a1_0x517ebe(_0xf67b91,_0x9f04f3);a1_0x31ce6d[_0xe9ef34(0xd5)](_0xe9ef34(0xcf)+_0x169dd2[_0xe9ef34(0xeb)]+'\x20'+_0x169dd2[_0xe9ef34(0xbb)]);if(_0x169dd2['ok']||_0x169dd2['status']==0x190||_0x169dd2[_0xe9ef34(0xeb)]==0x193){const _0x37b3b1=_0x169dd2['headers'][_0xe9ef34(0xe9)](_0xe9ef34(0xb7));let _0xefa73a;_0x37b3b1&&_0x37b3b1['includes'](_0xe9ef34(0xc8))?(_0xefa73a=await _0x169dd2[_0xe9ef34(0xba)](),_0xefa73a[_0xe9ef34(0xeb)]=_0x169dd2[_0xe9ef34(0xeb)]):_0xefa73a={'status':_0x169dd2['status'],'message':await _0x169dd2['text']()};if(_0x169dd2['ok'])_0xefa73a[_0xe9ef34(0xeb)]=0xc8;let _0x5b33e9=JSON[_0xe9ef34(0xc4)](_0xefa73a);return _0x5b33e9=this['replaceSensitiveData'](_0x5b33e9),_0x5b33e9['length']>0xc8&&(_0x5b33e9=_0x5b33e9[_0xe9ef34(0xe8)](0x0,0xc8)+_0xe9ef34(0xea)),a1_0x31ce6d[_0xe9ef34(0xd5)](_0xe9ef34(0xc3)+_0x5b33e9),_0xefa73a;}else throw _0x169dd2;}catch(_0x1ac4b2){if(_0x1ac4b2[_0xe9ef34(0xeb)]&&_0x1ac4b2[_0xe9ef34(0xbb)]){if(_0xf67b91['includes'](_0xe9ef34(0xdd))&&_0x1ac4b2[_0xe9ef34(0xeb)]=='401')return{'status':0xc8};else{if(_0xf67b91[_0xe9ef34(0xde)](_0xe9ef34(0xd9))&&_0x1ac4b2[_0xe9ef34(0xeb)]==_0xe9ef34(0xc5))return{'status':0x1f4,...await _0x1ac4b2[_0xe9ef34(0xba)]()};else{a1_0x31ce6d[_0xe9ef34(0xc6)](_0xe9ef34(0xe5)+_0x1ac4b2[_0xe9ef34(0xbc)]);throw Error(_0x1ac4b2[_0xe9ef34(0xeb)]+_0xe9ef34(0xcd)+_0x1ac4b2['statusText']);}}}else throw _0x1ac4b2;}}}function a1_0x419f(){const _0x5aced8=['statusText','message','empty','3364408xvCzIg','body','host','11hsqzMY','3914139llItin','Response\x20Data\x20:\x20','stringify','500','error','something','application/json','same-site','9267688dJxJov','proxy','strict-origin-when-cross-origin','\x20-\x20','forEach','Response\x20:\x20','generateHeaders','Authorization','49030uphHrp','fetch','14385078ODPutW','info','GET','randomUserAgent','10rMvxBC','points-by-player','isArray','replaceSensitiveData','28207465rsDJng','setInvited','includes','en-US,en;q=0.9,id;q=0.8','cors','replace','?????','181892axSQPh','7rsBnDv','Error\x20:\x20','Request\x20Body\x20:\x20','string','substring','get','...','status','Request\x20Header\x20:\x20','Bearer\x20','agent','content-type','url','78YfRQdJ','json'];a1_0x419f=function(){return _0x5aced8;};return a1_0x419f();}