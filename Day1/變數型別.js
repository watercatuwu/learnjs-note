/*------變數 Variables------*/
a = 1; // 避免不使用var或let宣告
var b = 1; //全域及區域變數
let c = 1; //區域變數,不可再次宣告
const d = 1; //只讀變數

/*------型別 Type------*/
//字串 string
var str1 = "我是字串";
var str2 = "Hello" + "World!!";

//樣板字面值 template literal
var tem1 = `第一行
第二行
第三行`;
var tem2 = `大家好 ${str1} 今年${1+1}歲`; //變數直接嵌入字串 支援運算式

//數字 number
var num1 = 10; //整數
var float1 = 0.5; //浮點數
/* Infinity 無限 -Infinity 負無限 NaN 非數字 */

//判斷是否為NaN isNaN
isNaN(str1); //true
isNaN(num1); //false

//布林值 Boolean
var bool1 = true;
var bool2 = (10 < 1); //false

//null & undefined
var nothing = null //沒有值
var undef; //undefined, 未賦值時變數為未定義

//檢查型別 typeof
typeof true; //'boolean'
typeof "uwu"; //'string'
