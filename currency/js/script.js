$("#subBtn").click(function () {
    let currSell = $("#inputValue").val();
    let currTypeSell = $("#currencySelectSell").val();
    let currTypeBuy = $("#currencySelectBuy").val();

    getResponse(currTypeSell, currTypeBuy, currSell);
});

function getResponse(currTypeSell, currTypeBuy, currSell) {
    let xhttp = new XMLHttpRequest();
    let httpRequest = "https://api.exchangeratesapi.io/latest?base=" + currTypeSell;
    xhttp.open("GET", httpRequest, true);
    xhttp.send();

    xhttp.addEventListener("readystatechange", function () {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
            let respList = JSON.parse(xhttp.responseText);

            getValue(respList, currSell, currTypeBuy);
        }
    });
}

function getValue(respList, currSell, currTypeBuy) {
    for (const key in respList["rates"]) {
        if (key === currTypeBuy) {
            let output = Math.round(respList["rates"][key] * currSell * 100) / 100;

            $("#outputValue").val(output);
        }
    }
}