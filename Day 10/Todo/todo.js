document.querySelector("form").addEventListener("submit", toDoList);

function toDoList() {
  event.preventDefault();  

  var itemName = document.querySelector("#name").value;
  var itemQty = document.querySelector("#qty").value;
  var itemPriority = document.querySelector("#priority").value;
  // console.log(itemName, itemQty, itemPriority);

  var tablerw = document.createElement("tr");
  document.querySelector("tbody").append(tablerw);

  var tdname = document.createElement("td");
  tdname.innerText = itemName;

  var tdQty = document.createElement("td");
  tdQty.innerText = itemQty;

  var tdPriority = document.createElement("td");
  tdPriority.innerText = itemPriority;

  tablerw.append(tdname, tdQty, tdPriority);
}
