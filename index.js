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

  var x = document.createElement("TBODY");
  var y = document.createElement("TR");
  var z1 = document.createElement("TD");
  var z2 = document.createElement("TD");
  var z3 = document.createElement("TD");
  var z4 = document.createElement("TD");

  z1.innerHTML = "₹ " + data.Amount;
  z2.innerHTML = data.Description;
  z3.innerHTML = data.Type;
  z4.innerHTML = `<button type="button" class="delete btn btn-primary" value=${key} style="background-color:blue; padding:2px">Delete</button> <button type="button"  class="Edit btn btn-primary" value=${key} style="background-color:blue; padding:2px">Edit</button>`;

  y.append(z1, z2, z3, z4);
  x.appendChild(y);
  document.getElementById("table").appendChild(x);
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
