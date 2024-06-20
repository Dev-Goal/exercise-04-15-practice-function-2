let btnGT = document.getElementById("btn");
btnGT.addEventListener("click", getGT);
function getGT() {
  let numberGT = Number(document.getElementById("numberGT").value);
  function inGiaiThua(numberGT) {
    let gt = 1;
    for (let i = 1; i <= numberGT; i++) {
      gt *= i;
    }
    return gt;
  }
  let result = inGiaiThua(numberGT);
  document.getElementById(
    "result"
  ).innerHTML = `Giai thừa của ${numberGT}! là ${result}`;
}
