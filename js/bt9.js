let firstArray = [];
let first = prompt("Nhập vào 1 chuỗi");
firstArray.push(first);
// firstArray.split('');
console.log(firstArray.length);
let secondÂrray = [];
let second = prompt("Nhập từ bất kỳ");
let count = 0;
function appearArray(second) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray.includes(second) == true) {
      count += 1;
    }
  }
  return count;
}
let result = appearArray(second);
alert(result);
