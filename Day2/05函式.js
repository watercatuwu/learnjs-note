/*------function------*/

//函式宣告
/* function 函式名稱(傳入的變數){
    函式中要執行的code
    return 回傳值
} */

function plus(a, b){
    return a + b;
};

console.log(plus(1,2)) //3

//函式運算式
//直接把函數指派給變數

let plusvar = function (a,b){
    return a + b;
};
//匿名函式

//new Function
let plusnew = new Function("a,b", "return a+b")
//實務上不使用，字串效率過低

/*------變數有效範圍 Scope------*/
let x = 10;
function func (){
    let x = 1;
    console.log(x);
}
func(); //1
console.log(x); //10

//function內宣告的區域變數x與function外宣告全域變數不同

let x = 10;
function func (){
    x = 1;
    console.log(x);
}
func(); //1
console.log(x); //1

//如果沒有在function內重新宣告x 程式會去尋找更外層的x並改變值
