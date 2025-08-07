// window.onload = function () {
//    var today = new Date();
//     console.log(today);
 
//     console.log("年=" + today.getFullYear());
//     console.log("月=" + (today.getMonth()+1));
//     console.log("日=" + today.getDate());
//     console.log("時=" + today.getHours());
//     console.log("分=" + today.getMinutes());
//     console.log("秒=" + today.getSeconds());
// }

// const date = new Date("2000-01-17T16:45:30");
// const [month, day, year] = [
//   date.getMonth(),
//   date.getDate(),
//   date.getFullYear(),
// ];
// // [0, 17, 2000] （月は 0 基点であるため）
// const [hour, minutes, seconds] = [
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),
// ];
// // [16, 45, 30]

// const today = new Date();

const date = new Date();
const [year, month, day,] = [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
];

console.log(`${year}年${month}月${day}日`);

// 今日の日付が欲しいなら new Date()はブランクで記述する
