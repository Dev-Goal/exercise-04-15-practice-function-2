let btnCalc = document.getElementById("btn");
btnCalc.addEventListener("click", getCalc);
function getCalc() {
  let numberWidth = Number(document.getElementById("numberWidth").value);

  function areCircle(numberWidth) {
    return numberWidth * numberWidth * Math.PI;
  }
  let resultArea = areCircle(numberWidth);

  function cvCircle(numberWidth) {
    return numberWidth * 2 * Math.PI;
  }
  let resultCV = cvCircle(numberWidth);

  document.getElementById("resultArea").innerHTML = resultArea;
  document.getElementById("resultCV").innerHTML = resultCV;
}
