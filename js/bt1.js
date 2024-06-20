let btnCheck = document.getElementById("btn");
btnCheck.addEventListener("click", getCheck);
function getCheck(){
    let squareNumber = Number(document.getElementById("number").value);
    function numberSquare(squareNumber){
        return squareNumber*squareNumber;
    }
    let result = numberSquare(squareNumber);
    document.getElementById("result").innerHTML = `Bình phương của ${squareNumber} là ${result}`;
}