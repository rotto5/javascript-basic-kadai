const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
for(let i = 0; i < 2; i++) {
  for (let i = 0; i <= 15; i++) {
  console.log(holidays[i]);
  }
}

// while文の場合
let i = 0;
while(i < 2) {
  let j = 0;
  while (j <= 15) {
    console.log(holidays[j]);
    j++;
  }
  i++;
}

// // holidays[i]の最後の要素は出力しているか確認
// for (let i = 0; i <= 15; i++) {
//   console.log(i, holidays[i]);
// }

// // 要素の数の確認
// console.log(holidays.length);