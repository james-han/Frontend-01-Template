let reg = /(([+-]?\d+\.?\d*[eE]?[+-]?[\d]*)|([+-]\-\d*\.?\d+[eE]?[+-]?[\d]*))?/gm;
//example
reg.test(+1);//true
reg.test(+1.0);//true
reg.test(+1.1);//true
reg.test(-1);//true
reg.test(-1.0);//true
reg.test(-1.1);//true
reg.test(1);//true
reg.test(1.0);//true
reg.test(1.1);//true
reg.test(+1e2);//true
reg.test(-1e2);//true
reg.test(1e2);//true
reg.test(+1e-2);//true
reg.test(-1e-2);//true
reg.test(1e-2);//true
reg.test(+1e-23);//true
reg.test(-1e-23);//true
reg.test(1e-23);//true
//....