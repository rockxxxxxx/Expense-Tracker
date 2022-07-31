//Adding the data
document.getElementById("submit").addEventListener("click", function () {
  const amount = document.getElementById("amount").value;
  const desc = document.getElementById("desc").value;
  const type = document.getElementById("cat").value;

  const obj = {
    Amount: amount,
    Description: desc,
    Type: type,
  };
  const Expense = JSON.stringify(obj);
  localStorage.setItem(
    `Expense${Math.floor(Math.random() * 10000 + 1)}`,
    Expense
  );
});

//Printing the data
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let data = JSON.parse(localStorage.getItem(key));
  const node = document.createElement("li");
  const node1 = document.createElement("button");
  const node2 = document.createElement("button");
  const textnode = document.createTextNode(
    `${data.Amount} - ${data.Description} - ${data.Type}  -----     `
  );
  node.appendChild(textnode);

  node1.innerText = "Delete";
  node1.value = key;
  node1.setAttribute("class", "delete");

  node2.innerText = "Edit";
  node2.value = key;
  node2.setAttribute("class", "Edit");

  document.getElementById("display").append(node, node1, node2);
}

//Deleting the value
var del = document.getElementsByClassName("delete");
for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
    localStorage.removeItem(del[i].value);
    location.reload();
    //alert(del[i].value);
  });
}

//Editing the value
var edit = document.getElementsByClassName("Edit");
for (let i = 0; i < del.length; i++) {
  edit[i].addEventListener("click", function () {
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "inline";
    var d = localStorage.getItem(edit[i].value);
    document.getElementById("amount").value = JSON.parse(d).Amount;
    document.getElementById("desc").value = JSON.parse(d).Description;
    document.getElementById("cat").value = JSON.parse(d).Type;

    document.getElementById("update").value = edit[i].value;
  });
}

//Updating the value;
document.getElementById("update").addEventListener("click", function () {
  let key5 = document.getElementById("update").value;
  let amount1 = document.getElementById("amount").value;
  let desc1 = document.getElementById("desc").value;
  let type1 = document.getElementById("cat").value;

  const obj5 = {
    Amount: amount1,
    Description: desc1,
    Type: type1,
  };
  const Expense = JSON.stringify(obj5);
  localStorage.setItem(key5, Expense);
});
