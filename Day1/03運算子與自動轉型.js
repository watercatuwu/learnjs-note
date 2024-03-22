var foo; //敘述句 Statement(變數宣告、迴圈、if...)
var a = 5*5 //運算式 Expression <- 今天學這個


/*------指派運算子 Assignment------*/
var x = 1 


/*------算術運算子 Arithmetic------*/
var x = x + 1 // var x += 1
var x = x - 1 // var x -= 1
var x = x * 2 // var x *= 2
var x = x / 2 // var x /= 2
var x = x % 2 // var x %= 5 (餘數)
var x = x ** 2 // var x **= 2 (指數)

//自動轉型
//加法 嘗試.tostring() or String()
var x = 10 + "uwu" // "10uwu"
var x = 100 + "100" // "100100"
//減法 嘗試Number() 如果物件無法valueof() 則tostring()後嘗試Number()
var x = 100 - "50" // 50
var x = 100 - {} // NaN
//乘法 Number()
var x = 100 * "10" // 1000
//除法 Number()
var x = 100 / "10" // 10
//取餘數 Number()
var x = 100 % "3" // 1


/*------一元運算子------*/
var x = -1 // -1
console.log(-x) // 1
//正負號的自動轉型 Number()
var x = "-10"
console.log(-x) // 10
//遞增遞減 ++/--
// ++x vs x++ 差異在於遞增執行先後順序


/*------比較運算子 Comperation------*/
//相等與全等 == vs ===
var a = 10
var b = 10
console.log(a == b) // true

var a = 10
var b = "10"
console.log(a == b) // true 過於貼心的自動轉型 
console.log(a === b) // false 要使用全等=== 才不會自動轉型
// != vs !== 也是相同概念

//大於小於的自動轉型
var a = 1
var b = "2"
console.log(a > b) //false b轉型成number

var a = "A"
var b = "B"
console.log(a < b) //true 字串依照字母順序比較大小

//boolean true = 1, false = 0
//物件比較一樣透過valueof() 如果無法透過valueof()比較 則嘗試tostring()


/*------邏輯運算子 Logical------*/
//運算式A || 運算式B OR
//運算式A && 運算式B AND
//!運算式 NOT 
//!!xx = Boolean(xx) 兩次NOT = Boolean函數的返回結果

//另外 很妙的是只有NOT會返回true or false (我只想說wtf)
var a = 123
var b = 456
console.log(a && b) // 456??

//EMEAScript規範裡面寫 && or || 產生的值不一定是boolean而是兩者其一
//在if判斷式中會根據&& or ||回傳的值再去做ToBooleanq判斷

//看過自動轉型和邏輯運算子 我只想說不愧是入門到放棄
//2024-03-08 by watercatuwu
