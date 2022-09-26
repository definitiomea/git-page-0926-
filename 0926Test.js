let tablefield = document.getElementById("tablefield");

function table() {
    let tableNum = prompt("원하는 단을 입력하세요");
    let content = "";
    if(tableNum >= 2 && tableNum <= 9) {
        content += `<h1>${tableNum}단</h1>`;
        for(let i = tableNum; i <= tableNum; i++) {
            for(let j = 1; j <= 9; j++) {
                content += `<p>${tableNum} X ${j} = ${tableNum * j}</p>`;
            }
        }
        tablefield.innerHTML = content;
    }
    else {
        alert("구구단에 들어가는 수가 아닙니다.");
        tablefield.innerHTML = "";
    }
}