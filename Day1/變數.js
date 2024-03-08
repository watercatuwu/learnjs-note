var foo; //敘述句 Statement(變數宣告、迴圈、if...)
var a = 5*5 //運算式 Expression <- 今天學這個

/*------運算子 Operator------*/
//指派運算子 Assignment
var x = 1 
//算術運算子 Arithmetic
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
//減法 嘗試Number() 如果物件無法valueof() 則.tostring後嘗試Number()
var x = 100 - "50" // 50
var x = 100 - {} // NaN
//乘法 Number()
var x = 100 * "10" // 1000
//除法 Number()
var x = 100 / "10" // 10
//取餘數 Number()
var x = 100 % "3" // 1

//一元運算子 +/-
var x = -1 // -1
console.log(-x) // 1
//自動轉型 Number()
var x = "-10"
console.log(-x) // 10
//遞增遞減 ++/--
// ++x vs x++ 差異在於遞增執行先後順序

//比較運算子 Comperation
//相等與全等 == vs ===
var a = 10
var b = 10
console.log(a == b) // true

var a = 10
var b = "10"
console.log(a == b) // true 過於貼心的自動轉型 
console.log(a === b) // false 要使用全等=== 才不會自動轉型

// != vs !== 也是相同概念
// 還有>, <, >=, <= 不贅述

//邏輯運算子 Logical
//運算式A || 運算式B OR
//運算式A && 運算式B AND
//!運算式 NOT
//後面if條件式會詳述

//2024-03-08 by watercatuwu
