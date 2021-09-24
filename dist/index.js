'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assert = require('assert');
var module$1 = require('module');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
var module__default = /*#__PURE__*/_interopDefaultLegacy(module$1);

/* es-module-lexer 0.4.1 */
const A=1===new Uint8Array(new Uint16Array([1]).buffer)[0];function parse(g,E="@"){if(!C)return init.then(()=>parse(g));const I=g.length+1,w=(C.__heap_base.value||C.__heap_base)+4*I-C.memory.buffer.byteLength;w>0&&C.memory.grow(Math.ceil(w/65536));const D=C.sa(I-1);if((A?B:Q)(g,new Uint16Array(C.memory.buffer,D,I)),!C.parse())throw Object.assign(new Error(`Parse error ${E}:${g.slice(0,C.e()).split("\n").length}:${C.e()-g.lastIndexOf("\n",C.e()-1)}`),{idx:C.e()});const L=[],k=[];for(;C.ri();){const A=C.is(),Q=C.ie();let B;C.ip()&&(B=o(g.slice(A-1,Q+1))),L.push({n:B,s:A,e:Q,ss:C.ss(),se:C.se(),d:C.id()});}for(;C.re();)k.push(g.slice(C.es(),C.ee()));function o(A){try{return (0,eval)(A)}catch{}}return [L,k,!!C.f()]}function Q(A,Q){const B=A.length;let C=0;for(;C<B;){const B=A.charCodeAt(C);Q[C++]=(255&B)<<8|B>>>8;}}function B(A,Q){const B=A.length;let C=0;for(;C<B;)Q[C]=A.charCodeAt(C++);}let C;const init=WebAssembly.compile((g="AGFzbQEAAAABWAxgAX8Bf2AEf39/fwBgAn9/AGAAAX9gAABgBn9/f39/fwF/YAR/f39/AX9gA39/fwF/YAd/f39/f39/AX9gBX9/f39/AX9gAn9/AX9gCH9/f39/f39/AX8DMC8AAQIDAwMDAwMDAwMDAwMABAQABQQEAAAAAAQEBAQEAAUGBwgJCgsDAgAACgMICwQFAXABAQEFAwEAAQYPAn8BQfDwAAt/AEHw8AALB18QBm1lbW9yeQIAAnNhAAABZQADAmlzAAQCaWUABQJzcwAGAnNlAAcCaWQACAJpcAAJAmVzAAoCZWUACwJyaQAMAnJlAA0BZgAOBXBhcnNlAA8LX19oZWFwX2Jhc2UDAQrbNC9oAQF/QQAgADYCtAhBACgCkAgiASAAQQF0aiIAQQA7AQBBACAAQQJqIgA2ArgIQQAgADYCvAhBAEEANgKUCEEAQQA2AqQIQQBBADYCnAhBAEEANgKYCEEAQQA2AqwIQQBBADYCoAggAQurAQECf0EAKAKkCCIEQRhqQZQIIAQbQQAoArwIIgU2AgBBACAFNgKkCEEAIAQ2AqgIQQAgBUEcajYCvAggBSAANgIIAkACQEEAKAKICCADRw0AIAUgAjYCDAwBCwJAQQAoAoQIIANHDQAgBSACQQJqNgIMDAELIAVBACgCkAg2AgwLIAUgATYCACAFIAM2AhAgBSACNgIEIAVBADYCGCAFQQAoAoQIIANGOgAUC0gBAX9BACgCrAgiAkEIakGYCCACG0EAKAK8CCICNgIAQQAgAjYCrAhBACACQQxqNgK8CCACQQA2AgggAiABNgIEIAIgADYCAAsIAEEAKALACAsVAEEAKAKcCCgCAEEAKAKQCGtBAXULFQBBACgCnAgoAgRBACgCkAhrQQF1CxUAQQAoApwIKAIIQQAoApAIa0EBdQsVAEEAKAKcCCgCDEEAKAKQCGtBAXULOwEBfwJAQQAoApwIKAIQIgBBACgChAhHDQBBfw8LAkAgAEEAKAKICEcNAEF+DwsgAEEAKAKQCGtBAXULCwBBACgCnAgtABQLFQBBACgCoAgoAgBBACgCkAhrQQF1CxUAQQAoAqAIKAIEQQAoApAIa0EBdQslAQF/QQBBACgCnAgiAEEYakGUCCAAGygCACIANgKcCCAAQQBHCyUBAX9BAEEAKAKgCCIAQQhqQZgIIAAbKAIAIgA2AqAIIABBAEcLCABBAC0AxAgLhQwBBX8jAEGA8ABrIgEkAEEAQQE6AMQIQQBB//8DOwHKCEEAQQAoAowINgLMCEEAQQAoApAIQX5qIgI2AuAIQQAgAkEAKAK0CEEBdGoiAzYC5AhBAEEAOwHGCEEAQQA7AcgIQQBBADoA0AhBAEEANgLACEEAQQA6ALAIQQAgAUGA0ABqNgLUCEEAIAFBgBBqNgLYCEEAQQA6ANwIAkACQAJAA0BBACACQQJqIgQ2AuAIAkACQAJAAkAgAiADTw0AIAQvAQAiA0F3akEFSQ0DIANBm39qIgVBBE0NASADQSBGDQMCQCADQS9GDQAgA0E7Rg0DDAYLAkAgAi8BBCIEQSpGDQAgBEEvRw0GEBAMBAsQEQwDC0EAIQMgBCECQQAtALAIDQYMBQsCQAJAIAUOBQEFBQUAAQsgBBASRQ0BIAJBBGpB7QBB8ABB7wBB8gBB9AAQE0UNARAUDAELQQAvAcgIDQAgBBASRQ0AIAJBBGpB+ABB8ABB7wBB8gBB9AAQE0UNABAVQQAtAMQIDQBBAEEAKALgCCICNgLMCAwEC0EAQQAoAuAINgLMCAtBACgC5AghA0EAKALgCCECDAALC0EAIAI2AuAIQQBBADoAxAgLA0BBACACQQJqIgM2AuAIAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAJBACgC5AhPDQAgAy8BACIEQXdqQQVJDQ4gBEFgaiIFQQlNDQEgBEGgf2oiBUEJTQ0CAkACQAJAIARBhX9qIgNBAk0NACAEQS9HDRAgAi8BBCICQSpGDQEgAkEvRw0CEBAMEQsCQAJAIAMOAwARAQALAkBBACgCzAgiBC8BAEEpRw0AQQAoAqQIIgJFDQAgAigCBCAERw0AQQBBACgCqAgiAjYCpAgCQCACRQ0AIAJBADYCGAwBC0EAQQA2ApQICyABQQAvAcgIIgJqQQAtANwIOgAAQQAgAkEBajsByAhBACgC2AggAkECdGogBDYCAEEAQQA6ANwIDBALQQAvAcgIIgJFDQlBACACQX9qIgM7AcgIAkAgAkEALwHKCCIERw0AQQBBAC8BxghBf2oiAjsBxghBAEEAKALUCCACQf//A3FBAXRqLwEAOwHKCAwICyAEQf//A0YNDyADQf//A3EgBEkNCQwPCxARDA8LAkACQAJAAkBBACgCzAgiBC8BACICEBZFDQAgAkFVaiIDQQNLDQICQAJAAkAgAw4EAQUCAAELIARBfmovAQBBUGpB//8DcUEKSQ0DDAQLIARBfmovAQBBK0YNAgwDCyAEQX5qLwEAQS1GDQEMAgsCQCACQf0ARg0AIAJBKUcNAUEAKALYCEEALwHICEECdGooAgAQF0UNAQwCC0EAKALYCEEALwHICCIDQQJ0aigCABAYDQEgASADai0AAA0BCyAEEBkNACACRQ0AQQEhBCACQS9GQQAtANAIQQBHcUUNAQsQGkEAIQQLQQAgBDoA0AgMDQtBAC8ByghB//8DRkEALwHICEVxQQAtALAIRXEhAwwPCyAFDgoMCwELCwsLAgcEDAsgBQ4KAgoKBwoJCgoKCAILEBsMCQsQHAwICxAdDAcLQQAvAcgIIgINAQsQHkEAIQMMCAtBACACQX9qIgQ7AcgIQQAoAqQIIgJFDQQgAigCEEEAKALYCCAEQf//A3FBAnRqKAIARw0EIAIgAzYCBAwEC0EAQQAvAcgIIgJBAWo7AcgIQQAoAtgIIAJBAnRqQQAoAswINgIADAMLIAMQEkUNAiACLwEKQfMARw0CIAIvAQhB8wBHDQIgAi8BBkHhAEcNAiACLwEEQewARw0CAkACQCACLwEMIgRBd2oiAkEXSw0AQQEgAnRBn4CABHENAQsgBEGgAUcNAwtBAEEBOgDcCAwCCyADEBJFDQEgAkEEakHtAEHwAEHvAEHyAEH0ABATRQ0BEBQMAQtBAC8ByAgNACADEBJFDQAgAkEEakH4AEHwAEHvAEHyAEH0ABATRQ0AEBULQQBBACgC4Ag2AswIC0EAKALgCCECDAALCyABQYDwAGokACADC1ABBH9BACgC4AhBAmohAEEAKALkCCEBAkADQCAAIgJBfmogAU8NASACQQJqIQAgAi8BAEF2aiIDQQNLDQAgAw4EAQAAAQELC0EAIAI2AuAIC3cBAn9BAEEAKALgCCIAQQJqNgLgCCAAQQZqIQBBACgC5AghAQNAAkACQAJAIABBfGogAU8NACAAQX5qLwEAQSpHDQIgAC8BAEEvRw0CQQAgAEF+ajYC4AgMAQsgAEF+aiEAC0EAIAA2AuAIDwsgAEECaiEADAALCx0AAkBBACgCkAggAEcNAEEBDwsgAEF+ai8BABAfCz8BAX9BACEGAkAgAC8BCCAFRw0AIAAvAQYgBEcNACAALwEEIANHDQAgAC8BAiACRw0AIAAvAQAgAUYhBgsgBgv3AwEEf0EAQQAoAuAIIgBBDGoiATYC4AgCQAJAAkACQAJAECciAkFZaiIDQQdNDQAgAkEiRg0CIAJB+wBGDQIMAQsCQAJAIAMOCAMBAgMCAgIAAwtBAEEAKALgCEECajYC4AgQJ0HtAEcNA0EAKALgCCIDLwEGQeEARw0DIAMvAQRB9ABHDQMgAy8BAkHlAEcNA0EAKALMCC8BAEEuRg0DIAAgACADQQhqQQAoAogIEAEPC0EAKALYCEEALwHICCIDQQJ0aiAANgIAQQAgA0EBajsByAhBACgCzAgvAQBBLkYNAiAAQQAoAuAIQQJqQQAgABABQQBBACgC4AhBAmo2AuAIAkACQBAnIgNBIkYNAAJAIANBJ0cNABAcDAILQQBBACgC4AhBfmo2AuAIDwsQGwtBAEEAKALgCEECajYC4AgCQBAnQSlHDQBBACgCpAgiA0EBOgAUIANBACgC4Ag2AgRBAEEALwHICEF/ajsByAgPC0EAQQAoAuAIQX5qNgLgCA8LQQAoAuAIIAFGDQELQQAvAcgIDQFBACgC4AghA0EAKALkCCEBAkADQCADIAFPDQECQAJAIAMvAQAiAkEnRg0AIAJBIkcNAQsgACACECgPC0EAIANBAmoiAzYC4AgMAAsLEB4LDwtBAEEAKALgCEF+ajYC4AgLmAYBBH9BAEEAKALgCCIAQQxqIgE2AuAIECchAgJAAkACQAJAAkACQEEAKALgCCIDIAFHDQAgAhApRQ0BCwJAAkACQAJAIAJBn39qIgFBC00NAAJAAkAgAkEqRg0AIAJB9gBGDQUgAkH7AEcNA0EAIANBAmo2AuAIECchA0EAKALgCCEBA0AgA0H//wNxECoaQQAoAuAIIQIQJxoCQCABIAIQKyIDQSxHDQBBAEEAKALgCEECajYC4AgQJyEDC0EAKALgCCECAkAgA0H9AEYNACACIAFGDQwgAiEBIAJBACgC5AhNDQEMDAsLQQAgAkECajYC4AgMAQtBACADQQJqNgLgCBAnGkEAKALgCCICIAIQKxoLECchAgwBCyABDgwEAAEGAAUAAAAAAAIEC0EAKALgCCEDAkAgAkHmAEcNACADLwEGQe0ARw0AIAMvAQRB7wBHDQAgAy8BAkHyAEcNAEEAIANBCGo2AuAIIAAQJxAoDwtBACADQX5qNgLgCAwCCwJAIAMvAQhB8wBHDQAgAy8BBkHzAEcNACADLwEEQeEARw0AIAMvAQJB7ABHDQAgAy8BChAfRQ0AQQAgA0EKajYC4AgQJyECQQAoAuAIIQMgAhAqGiADQQAoAuAIEAJBAEEAKALgCEF+ajYC4AgPC0EAIANBBGoiAzYC4AgLQQAgA0EEaiICNgLgCEEAQQA6AMQIA0BBACACQQJqNgLgCBAnIQNBACgC4AghAgJAIAMQKkEgckH7AEcNAEEAQQAoAuAIQX5qNgLgCA8LQQAoAuAIIgMgAkYNASACIAMQAgJAECciAkEsRg0AAkAgAkE9Rw0AQQBBACgC4AhBfmo2AuAIDwtBAEEAKALgCEF+ajYC4AgPC0EAKALgCCECDAALCw8LQQAgA0EKajYC4AgQJxpBACgC4AghAwtBACADQRBqNgLgCAJAECciAkEqRw0AQQBBACgC4AhBAmo2AuAIECchAgtBACgC4AghAyACECoaIANBACgC4AgQAkEAQQAoAuAIQX5qNgLgCA8LIAMgA0EOahACDwsQHgt1AQF/AkACQCAAQV9qIgFBBUsNAEEBIAF0QTFxDQELIABBRmpB//8DcUEGSQ0AIABBWGpB//8DcUEHSSAAQSlHcQ0AAkAgAEGlf2oiAUEDSw0AIAEOBAEAAAEBCyAAQf0ARyAAQYV/akH//wNxQQRJcQ8LQQELPQEBf0EBIQECQCAAQfcAQegAQekAQewAQeUAECANACAAQeYAQe8AQfIAECENACAAQekAQeYAECIhAQsgAQutAQEDf0EBIQECQAJAAkACQAJAAkACQCAALwEAIgJBRWoiA0EDTQ0AIAJBm39qIgNBA00NASACQSlGDQMgAkH5AEcNAiAAQX5qQeYAQekAQe4AQeEAQewAQewAECMPCyADDgQCAQEFAgsgAw4EAgAAAwILQQAhAQsgAQ8LIABBfmpB5QBB7ABB8wAQIQ8LIABBfmpB4wBB4QBB9ABB4wAQJA8LIABBfmovAQBBPUYL7QMBAn9BACEBAkAgAC8BAEGcf2oiAkETSw0AAkACQAJAAkACQAJAAkACQCACDhQAAQIICAgICAgIAwQICAUIBggIBwALIABBfmovAQBBl39qIgJBA0sNBwJAAkAgAg4EAAkJAQALIABBfGpB9gBB7wAQIg8LIABBfGpB+QBB6QBB5QAQIQ8LIABBfmovAQBBjX9qIgJBAUsNBgJAAkAgAg4CAAEACwJAIABBfGovAQAiAkHhAEYNACACQewARw0IIABBempB5QAQJQ8LIABBempB4wAQJQ8LIABBfGpB5ABB5QBB7ABB5QAQJA8LIABBfmovAQBB7wBHDQUgAEF8ai8BAEHlAEcNBQJAIABBemovAQAiAkHwAEYNACACQeMARw0GIABBeGpB6QBB7gBB8wBB9ABB4QBB7gAQIw8LIABBeGpB9ABB+QAQIg8LQQEhASAAQX5qIgBB6QAQJQ0EIABB8gBB5QBB9ABB9QBB8gAQIA8LIABBfmpB5AAQJQ8LIABBfmpB5ABB5QBB4gBB9QBB5wBB5wBB5QAQJg8LIABBfmpB4QBB9wBB4QBB6QAQJA8LAkAgAEF+ai8BACICQe8ARg0AIAJB5QBHDQEgAEF8akHuABAlDwsgAEF8akH0AEHoAEHyABAhIQELIAELgwEBA38DQEEAQQAoAuAIIgBBAmoiATYC4AgCQAJAAkAgAEEAKALkCE8NACABLwEAIgFBpX9qIgJBAU0NAgJAIAFBdmoiAEEDTQ0AIAFBL0cNBAwCCyAADgQAAwMAAAsQHgsPCwJAAkAgAg4CAQABC0EAIABBBGo2AuAIDAELECwaDAALC5EBAQR/QQAoAuAIIQBBACgC5AghAQJAA0AgACICQQJqIQAgAiABTw0BAkAgAC8BACIDQdwARg0AAkAgA0F2aiICQQNNDQAgA0EiRw0CQQAgADYC4AgPCyACDgQCAQECAgsgAkEEaiEAIAIvAQRBDUcNACACQQZqIAAgAi8BBkEKRhshAAwACwtBACAANgLgCBAeC5EBAQR/QQAoAuAIIQBBACgC5AghAQJAA0AgACICQQJqIQAgAiABTw0BAkAgAC8BACIDQdwARg0AAkAgA0F2aiICQQNNDQAgA0EnRw0CQQAgADYC4AgPCyACDgQCAQECAgsgAkEEaiEAIAIvAQRBDUcNACACQQZqIAAgAi8BBkEKRhshAAwACwtBACAANgLgCBAeC8kBAQV/QQAoAuAIIQBBACgC5AghAQNAIAAiAkECaiEAAkACQCACIAFPDQAgAC8BACIDQaR/aiIEQQRNDQEgA0EkRw0CIAIvAQRB+wBHDQJBAEEALwHGCCIAQQFqOwHGCEEAKALUCCAAQQF0akEALwHKCDsBAEEAIAJBBGo2AuAIQQBBAC8ByAhBAWoiADsByghBACAAOwHICA8LQQAgADYC4AgQHg8LAkACQCAEDgUBAgICAAELQQAgADYC4AgPCyACQQRqIQAMAAsLNQEBf0EAQQE6ALAIQQAoAuAIIQBBAEEAKALkCEECajYC4AhBACAAQQAoApAIa0EBdTYCwAgLNAEBf0EBIQECQCAAQXdqQf//A3FBBUkNACAAQYABckGgAUYNACAAQS5HIAAQKXEhAQsgAQtJAQN/QQAhBgJAIABBeGoiB0EAKAKQCCIISQ0AIAcgASACIAMgBCAFEBNFDQACQCAHIAhHDQBBAQ8LIABBdmovAQAQHyEGCyAGC1kBA39BACEEAkAgAEF8aiIFQQAoApAIIgZJDQAgAC8BACADRw0AIABBfmovAQAgAkcNACAFLwEAIAFHDQACQCAFIAZHDQBBAQ8LIABBemovAQAQHyEECyAEC0wBA39BACEDAkAgAEF+aiIEQQAoApAIIgVJDQAgAC8BACACRw0AIAQvAQAgAUcNAAJAIAQgBUcNAEEBDwsgAEF8ai8BABAfIQMLIAMLSwEDf0EAIQcCQCAAQXZqIghBACgCkAgiCUkNACAIIAEgAiADIAQgBSAGEC1FDQACQCAIIAlHDQBBAQ8LIABBdGovAQAQHyEHCyAHC2YBA39BACEFAkAgAEF6aiIGQQAoApAIIgdJDQAgAC8BACAERw0AIABBfmovAQAgA0cNACAAQXxqLwEAIAJHDQAgBi8BACABRw0AAkAgBiAHRw0AQQEPCyAAQXhqLwEAEB8hBQsgBQs9AQJ/QQAhAgJAQQAoApAIIgMgAEsNACAALwEAIAFHDQACQCADIABHDQBBAQ8LIABBfmovAQAQHyECCyACC00BA39BACEIAkAgAEF0aiIJQQAoApAIIgpJDQAgCSABIAIgAyAEIAUgBiAHEC5FDQACQCAJIApHDQBBAQ8LIABBcmovAQAQHyEICyAIC3YBA39BACgC4AghAAJAA0ACQCAALwEAIgFBd2pBBUkNACABQSBGDQAgAUGgAUYNACABQS9HDQICQCAALwECIgBBKkYNACAAQS9HDQMQEAwBCxARC0EAQQAoAuAIIgJBAmoiADYC4AggAkEAKALkCEkNAAsLIAELWAACQAJAIAFBIkYNACABQSdHDQFBACgC4AghARAcIAAgAUECakEAKALgCEEAKAKECBABDwtBACgC4AghARAbIAAgAUECakEAKALgCEEAKAKECBABDwsQHgtoAQJ/QQEhAQJAAkAgAEFfaiICQQVLDQBBASACdEExcQ0BCyAAQfj/A3FBKEYNACAAQUZqQf//A3FBBkkNAAJAIABBpX9qIgJBA0sNACACQQFHDQELIABBhX9qQf//A3FBBEkhAQsgAQttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARApDQJBACECQQBBACgC4AgiAEECajYC4AggAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC1wBAn8CQEEAKALgCCICLwEAIgNB4QBHDQBBACACQQRqNgLgCBAnIQJBACgC4AghACACECoaQQAoAuAIIQEQJyEDQQAoAuAIIQILAkAgAiAARg0AIAAgARACCyADC4kBAQV/QQAoAuAIIQBBACgC5AghAQN/IABBAmohAgJAAkAgACABTw0AIAIvAQAiA0Gkf2oiBEEBTQ0BIAIhACADQXZqIgNBA0sNAiACIQAgAw4EAAICAAALQQAgAjYC4AgQHkEADwsCQAJAIAQOAgEAAQtBACACNgLgCEHdAA8LIABBBGohAAwACwtJAQF/QQAhBwJAIAAvAQogBkcNACAALwEIIAVHDQAgAC8BBiAERw0AIAAvAQQgA0cNACAALwECIAJHDQAgAC8BACABRiEHCyAHC1MBAX9BACEIAkAgAC8BDCAHRw0AIAAvAQogBkcNACAALwEIIAVHDQAgAC8BBiAERw0AIAAvAQQgA0cNACAALwECIAJHDQAgAC8BACABRiEICyAICwsfAgBBgAgLAgAAAEGECAsQAQAAAAIAAAAABAAAcDgAAA==","undefined"!=typeof window&&"function"==typeof atob?Uint8Array.from(atob(g),A=>A.charCodeAt(0)):Buffer.from(g,"base64"))).then(WebAssembly.instantiate).then(({exports:A})=>{C=A;});var g;

function getSingleCharEscapes() {
  return [['b', '\b'], ['f', '\f'], ['n', '\n'], ['r', '\r'], ['t', '\t'], ['v', '\v'], ['0', '\0']].reduce((map, [key, value]) => {
    map.set(key, value);
    return map;
  }, new Map());
}
const SINGLE_CHAR_ESCAPES = getSingleCharEscapes();
[...SINGLE_CHAR_ESCAPES.keys()].reduce((map, code) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  map.set(SINGLE_CHAR_ESCAPES.get(code), `\\${code}`);
  return map;
}, new Map());

function stripSlashes(str, countOrOptions) {
  let options;

  if (typeof countOrOptions === 'number') {
    options = {
      count: countOrOptions
    };
  } else if (countOrOptions && typeof countOrOptions === 'object') {
    options = countOrOptions;
  } else {
    options = {};
  }

  const {
    count = 1,
    defaultEscapeValue = true,
    b = defaultEscapeValue,
    f = defaultEscapeValue,
    n = defaultEscapeValue,
    r = defaultEscapeValue,
    t = defaultEscapeValue,
    v = defaultEscapeValue,
    '0': nul = defaultEscapeValue,
    x = defaultEscapeValue,
    u = defaultEscapeValue,
    uEs6 = u
  } = options;
  const singleCharEscapes = getSingleCharEscapes();
  if (!b) singleCharEscapes.delete('b');
  if (!f) singleCharEscapes.delete('f');
  if (!n) singleCharEscapes.delete('n');
  if (!r) singleCharEscapes.delete('r');
  if (!t) singleCharEscapes.delete('t');
  if (!v) singleCharEscapes.delete('v');
  if (!nul) singleCharEscapes.delete('0');
  const patterns = [];
  if (x) patterns.push('x[a-fA-F0-9]{2}');
  if (u) patterns.push('u[a-fA-F0-9]{4}');
  if (uEs6) patterns.push('u{[a-fA-F0-9]+}');
  const rx = new RegExp(`\\\\(${[...patterns, '.', '$'].join('|')})`, 'g');

  for (let i = Math.max(1, count >> 0); i > 0; --i) {
    str = str.replace(rx, (...[, g1]) => {
      const suffix = g1;

      if (suffix.length > 1) {
        if (suffix[0] === 'x') {
          return String.fromCharCode(Number.parseInt(suffix.slice(1), 16));
        } else if (suffix[0] === 'u') {
          if (suffix[1] === '{') {
            const codePointStr = suffix.slice(2, -1);
            const codePoint = Number.parseInt(codePointStr, 16);

            if (codePoint > 0x10ffff) {
              // Not valid unicode, so just remove the slash, leaving the
              // trailing characters in place.
              return suffix;
            } else if (codePoint >= 0x10000) {
              const u = codePoint - 0x10000;
              const s1 = 0xd800 + (u >> 10);
              const s2 = 0xdc00 + (u & 0x3ff);
              return `${String.fromCharCode(s1, s2)}`;
            }

            return String.fromCharCode(codePoint);
          }

          return String.fromCharCode(Number.parseInt(suffix.slice(1), 16));
        }
      }

      return singleCharEscapes.get(suffix) || suffix;
    });
  }

  return str;
}

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Assumes the string is syntactically valid
const isConstantStringLiteral = stringLiteral => {
  const quote = [`'`, `"`, `\``].find(
    quoteCandidate =>
      stringLiteral.startsWith(quoteCandidate) &&
      stringLiteral.endsWith(quoteCandidate)
  );

  if (quote == null) {
    return false
  }

  for (let i = 1; i < stringLiteral.length - 1; i++) {
    // Check for end of string literal before end of stringLiteral
    if (stringLiteral[i] === quote && stringLiteral[i - 1] !== `\\`) {
      return false
    }

    // Check for interpolated value in template literal
    if (
      quote === `\`` &&
      stringLiteral.substring(i, i + 2) === `\${` &&
      stringLiteral[i - 1] !== `\\`
    ) {
      return false
    }
  }

  return true
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const builtinModules = new Set(module__default["default"].builtinModules);

const parseType = moduleSpecifier => {
  if (moduleSpecifier.length === 0) {
    return `invalid`
  }

  if (moduleSpecifier.startsWith(`/`)) {
    return `absolute`
  }

  if (moduleSpecifier.startsWith(`.`)) {
    return `relative`
  }

  if (builtinModules.has(moduleSpecifier)) {
    return `builtin`
  }

  return `package`
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const require$1 = module$1.createRequire((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('index.js', document.baseURI).href)));

const resolve = (from, to) => {
  try {
    return require$1.resolve(to, { paths: [path.dirname(from)] })
  } catch {
    return undefined
  }
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const parseModuleSpecifier = (
  moduleSpecifierString,
  { isDynamicImport, resolveFrom }
) => {
  assert__default["default"](isDynamicImport || isConstantStringLiteral(moduleSpecifierString));

  const { isConstant, value } =
    !isDynamicImport || isConstantStringLiteral(moduleSpecifierString)
      ? {
          isConstant: true,
          value: stripSlashes(
            moduleSpecifierString.substring(1, moduleSpecifierString.length - 1)
          )
        }
      : { isConstant: false, value: undefined };

  return {
    type: isConstant ? parseType(value) : `unknown`,
    isConstant,
    code: moduleSpecifierString,
    value,
    resolved:
      typeof resolveFrom === `string` && isConstant
        ? resolve(resolveFrom, value)
        : undefined
  }
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const separatorRegex = /^(?:\s+|,)$/u;

const skipSeparators = (imported, i) => {
  while (i < imported.length && separatorRegex.test(imported[i])) {
    i++;
  }

  return i
};

const skipNonSeparators = (imported, i) => {
  while (i < imported.length && !separatorRegex.test(imported[i])) {
    i++;
  }

  return i
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const parseNamedImports = (importClauseString, i) => {
  const startIndex = ++i;

  while (i < importClauseString.length && importClauseString[i] !== `}`) {
    i++;
  }

  const namedImports = importClauseString
    .substring(startIndex, i++)
    .split(`,`)
    .map(namedImport => {
      namedImport = namedImport.trim();
      if (namedImport.includes(` `)) {
        const components = namedImport.split(` `);
        return {
          specifier: components[0],
          binding: components[components.length - 1]
        }
      }
      return { specifier: namedImport, binding: namedImport }
    })
    .filter(({ specifier }) => specifier.length > 0);

  return { namedImports, i }
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const parseNamespaceImport = (importClauseString, i) => {
  i++;
  i = skipSeparators(importClauseString, i);
  i += `as`.length;
  i = skipSeparators(importClauseString, i);

  const startIndex = i;
  i = skipNonSeparators(importClauseString, i);

  return {
    namespaceImport: importClauseString.substring(startIndex, i),
    i
  }
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const parseDefaultImport = (importClauseString, i) => {
  const startIndex = i;
  i = skipNonSeparators(importClauseString, i);

  return { defaultImport: importClauseString.substring(startIndex, i), i }
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Assumes import clause is syntactically valid
const parseImportClause = importClauseString => {
  let defaultImport;
  let namespaceImport;
  const namedImports = [];

  for (let i = 0; i < importClauseString.length; i++) {
    if (separatorRegex.test(importClauseString[i])) {
      continue
    }

    if (importClauseString[i] === `{`) {
      let newNamedImports
      ;({ namedImports: newNamedImports, i } = parseNamedImports(
        importClauseString,
        i
      ));
      namedImports.push(...newNamedImports);
    } else if (importClauseString[i] === `*`) {
({ namespaceImport, i } = parseNamespaceImport(importClauseString, i));
    } else {
({ defaultImport, i } = parseDefaultImport(importClauseString, i));
    }
  }

  return {
    default: defaultImport,
    namespace: namespaceImport,
    named: namedImports
  }
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const parseImports = async (code, { resolveFrom } = {}) => {
  const [imports] = await parse(
    code,
    resolveFrom == null ? undefined : resolveFrom
  );

  return {
    *[Symbol.iterator]() {
      for (let {
        d: dynamicImportStartIndex,
        ss: statementStartIndex,
        s: moduleSpecifierStartIndex,
        e: moduleSpecifierEndIndexExclusive
      } of imports) {
        const isDynamicImport = dynamicImportStartIndex > -1;

        // Include string literal quotes in character range
        if (!isDynamicImport) {
          moduleSpecifierStartIndex--;
          moduleSpecifierEndIndexExclusive++;
        }

        const moduleSpecifierString = code.substring(
          moduleSpecifierStartIndex,
          moduleSpecifierEndIndexExclusive
        );
        const moduleSpecifier = parseModuleSpecifier(moduleSpecifierString, {
          isDynamicImport,
          resolveFrom
        });

        let importClause;
        if (!isDynamicImport) {
          let importClauseString = code
            .substring(
              statementStartIndex + `import`.length,
              moduleSpecifierStartIndex
            )
            .trim();
          if (importClauseString.endsWith(`from`)) {
            importClauseString = importClauseString.substring(
              0,
              importClauseString.length - `from`.length
            );
          }
          importClause = parseImportClause(importClauseString);
        }

        yield {
          ...(isDynamicImport
            ? {
                startIndex: dynamicImportStartIndex,

                // Include the closing parenthesis
                endIndex: moduleSpecifierEndIndexExclusive + 1
              }
            : {
                startIndex: statementStartIndex,
                endIndex: moduleSpecifierEndIndexExclusive
              }),
          isDynamicImport,
          moduleSpecifier,
          importClause
        };
      }
    }
  }
};

const transformName = (str) => str.replace(/\B([A-Z])/g, "-$1").toLowerCase();
const buildImportStatement = (itemModules, itemFrom) => `import ${itemModules} from "${itemFrom}";\n`;
const transform = (source, options) => {
    return new Promise(resolve => {
        parseImports(source)
            .then(allImports => {
            let segmentStart = 0;
            let segmentEnd = 0;
            const target = [];
            for (const item of allImports) {
                console.log(item);
                if (item.isDynamicImport)
                    return void 0;
                if (!item.importClause.default || item.importClause.default !== options.name) {
                    return void 0;
                }
                segmentEnd = item.startIndex;
                target.push(source.slice(segmentStart, segmentEnd));
                if (item.importClause && item.moduleSpecifier.value) {
                    const parsedImports = [];
                    if (item.importClause.default) {
                        parsedImports.push(buildImportStatement(item.importClause.default, item.moduleSpecifier.value));
                    }
                    item.importClause.named.forEach(v => {
                        buildImportStatement(v.binding === v.specifier
                            ? v.binding
                            : `${v.specifier} as ${v.binding}`, `${options.name}/${options.path}/${transformName(v.binding)}/${options.main || transformName(v.binding)}`);
                    });
                    target.push(parsedImports.join(""));
                }
                segmentStart = item.endIndex;
            }
            resolve(target.join(""));
        })
            .catch((err) => {
            console.error("uniapp-import-loader parse error", err);
            resolve(source);
        });
        return resolve(source);
    });
};

exports.transform = transform;
