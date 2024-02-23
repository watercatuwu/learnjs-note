/*------物件 Objects------*/
var obj = new Object(); //old

var class1 = {
  num: '109',
  stu: 38,
  sth: "Hello",
  printstu: function(){
    console.log(this.stu);
  }
}; //物件實字 Object literal

class1.num; //'109'
class1["sth"]; //'Hello'
class1.printstu(); //38

class1.sth1 = "uwu"; //新增屬性
delete class1.sth1; //刪除屬性

//檢查屬性是否存在
"num" in class1; //true
"sth1" in class1; //false
class1.hasOwnProperty("sth"); //true

//note:邏輯類似於python的dict

/*------陣列 Array------*/
var arr = new Array(); //old

var a = [] //陣列實字 Array literal
a[0] = "ant";
a[1] = "bird";
a[2] = "cat";

a.length //3, length取得字串或陣列長度

//指定元素不一定要連續
a[4] = "kitty"; //ant,bird,cat,undefined,dog

//新增刪除搜尋的函式
a.unshift("cheeseburger") //新增元素於陣列前端
a.push("cheeseburger") //新增元素於陣列末端
a.pop() //移除末端元素
a.indexOf("ant") //尋找元素索引
a.splice(0,1,"uwu") //刪除指定位置元素同時加入新元素於刪除位置,splice(start, deleteCount, item )

//檢查是否為陣列 Array.isArray()
Array.isArray(arr) //true
Array.isArray(obj) //false

//2024-02-23 by watercatuwu
