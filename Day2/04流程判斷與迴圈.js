/*------if...else------*/
// if (條件){要運行的code}
let buybaozi;
let watermelonseller = true;

if (watermelonseller == true){
    buybaozi = 1;
}
else{
    buybaozi = 10;
};
//蠻無聊的買包子笑話lol

/*------switch-----*/
/*switch (數值) {
    case 1: 
        運行code;
    default:
        上述case條件都不符則運行default
}
*/
let month = 1;

switch (Math.ceil(month/3)){
    case 1:
        console.log("spring");
        break;
    case 2:
        console.log("summer");
        break;
    case 3:
        console.log("fall");
        break;
    case 4:
        console.log("winter");
        break;
    default:
        console.log("error");
        break;
    //當case都不成立執行default
    //若無break語法將會繼續執行下去
};

/*------三元運算子------*/

//(條件) ? [數值/運算式1] : [數值/運算式2];
//如果條件為真，回傳數值1，否則回傳數值2

let age = 18
let status = (age >= 18) ? ["audlt"] : ["kid"];
console.log(status);

/*-----迴圈 loop-----*/

//for
for (let i = 0; i <= 10; i++){
    console.log(i);
}; //輸出0~10

//while

let i = 0;
while (i <= 10){
    console.log(i);
    i++;
}; //輸出0~10

//break會跳離迴圈
//continue會中斷本次迴圈
//js中沒有py的pass 直接空block就好

//2024-03-22 by watercatuwu