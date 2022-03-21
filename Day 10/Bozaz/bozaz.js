document.querySelector("form").addEventListener("submit", bozazlist);

function bozazlist () {
    event.preventDefault();
    var cat = document.querySelector("#category").value;
    var names = document.querySelector("#name").value;
    var prices = document.querySelector("#price").value;
    // console.log(cat, names, prices);

    var tbr = document.createElement("tr");

    var tb1 = document.createElement("td");
    tb1.innerText = cat;
    var tb2 = document.createElement("td");
    tb2.innerText = names;
    var tb3 = document.createElement("td");
    tb3.innerText = prices;

    document.querySelector("tbody").append(tbr);
    tbr.append(tb1, tb2, tb3);
}