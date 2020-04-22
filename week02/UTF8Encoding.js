// 将字符串格式化为UTF8编码的字节
let enUTF8 = function (str) {
    let res = [];
    let byteSize = 0;
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (0x00 <= code && code <= 0x7f) {
         byteSize += 1;
         res.push(code);
      } else if (0x80 <= code && code <= 0x7ff) {
         byteSize += 2;
         res.push((192 | (31 & (code >> 6))));
         res.push((128 | (63 & code)))
      } else if ((0x800 <= code && code <= 0xd7ff) 
          || (0xe000 <= code && code <= 0xffff)) {
         byteSize += 3;
         res.push((224 | (15 & (code >> 12))));
         res.push((128 | (63 & (code >> 6))));
         res.push((128 | (63 & code)))
      }
     }
     for (i = 0; i < res.length; i++) {
         res[i] &= 0xff;
         res[i] = '\\u0x' + res[i].toString(16);//将其转成16位
     }
    //byteSize为所占字符大小,res部分为utf-8编码
     if (byteSize <= 0xff) {
       return [0, byteSize].concat(res);
     } else {
       return [byteSize >> 8, byteSize & 0xff].concat(res);
     }
}
 
enUTF8('A')//[0, 1, "\u0x41"]占一个字符utf8编码为\u0x41
enUTF8('极')//[0, 3, "\u0xe6", "\u0x9e", "\u0x81"]占3个字符utf8编码为"\u0xe6 \u0x9e \u0x81"
enUTF8('客')//[0, 3, "\u0xe5", "\u0xae", "\u0xa2"]占3个字符utf8编码为"\u0xe5 \u0xae \u0xa2"