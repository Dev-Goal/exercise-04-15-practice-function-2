let array = [];
let lengthArray;
while (true) {
  lengthArray = Number(prompt("Nhập vào số lượng của mảng"));
  if (Number.isInteger(lengthArray) && lengthArray > 0) {
    break;
  }
}
for (let i = 0; i < lengthArray; i++) {
  let numberArray = Number(prompt(`Nhập vào phần tử thứ ${i + 1}`));
  array.push(numberArray);
}
let min = array[0];
function calcGTNN(array) {
  for (let i = 0; i < lengthArray; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
let result = calcGTNN(array);
alert(` Giá trị nhỏ nhất của dãy số là ${min} `);
