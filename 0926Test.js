let tablefield = document.getElementById("tablefield");

function table() {
    let tableNum = prompt("원하는 단을 입력하세요");
    if(tableNum >= 2 && tableNum <= 9) {
        document.write(`<h1>${tableNum}단</h1>`);
        for(let i = tableNum; i <= tableNum; i++) {
            for(let j = 1; j <= 9; j++) {
                document.write(`<p>${tableNum} X ${j} = ${tableNum * j}</p>`);
            }
        }
    }
    else {
        alert("구구단에 들어가는 수가 아닙니다.");
    }
}