let firstArray = ["d", "a", "a", "r", "a","a","a","a","a"];
// let first = prompt("Nhập vào 1 chuỗi");
// firstArray.push(first);
// firstArray.split('');
// console.log(firstArray.length);
let secondÂrray = "a";
// let second = prompt("Nhập từ bất kỳ");
function appearArray() {
  let count = 0;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] == secondÂrray) {
      count++;
    }
  }
  return count;
}
let result = appearArray();
console.log(result);
