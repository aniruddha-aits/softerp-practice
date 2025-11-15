let stocks = [];

function saveStock(event) {
    event.preventDefault();

    let stockName = document.getElementById('stockName').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let supplier = document.getElementById('supplier').value;

    stocks = [stockName, quantity, price, supplier];

    let Table = document.getElementById("stockTable");

    Table.innerHTML += `
        <tr>
            <td>${stockName}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td>${supplier}</td>
        </tr>
    `;

    console.log(stocks);
}

function ClearForm() {

    document.getElementById('stockName').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('price').value = "";
    document.getElementById('supplier').value = "";

    console.log("Modal Closed");

}

function searchStock(event) {
    event.preventDefault();
    let length = stocks.length;
    let isFound = false;
    let nameSearch = document.getElementById("search").value;

    for (let i=0; i<length; i++) {
        if (stocks[i] == nameSearch) {
            console.log("Stock Found");
            isFound = true;
        }
    }

    if (isFound == false) {
        console.log("Stock not found");
    }
}