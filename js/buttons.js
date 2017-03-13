var currencies = ["cad","usd","xbt","dash","eth"];
var currencyDropdownEl = document.createElement("SELECT");
var currencyOptions = [];
for (c of currencies) {
   var option = document.createElement("OPTION");
   option.setAttribute("value", c);
   option.text = c.toUpperCase();
   currencyDropdownEl.add(option);
}

var numRows = 0;
addRow(true); // Initialize

function addRow(isInitial) {
   var transactionsDivEl = document.getElementById("transactions");
   var unorderedListEl = transactionsDivEl.firstElementChild;
   var row = document.createElement("LI");
   var inputInEl = document.createElement("INPUT");
   inputInEl.setAttribute("type","text")
   inputInEl.setAttribute("name","in"+parseInt(numRows))
   inputInEl.setAttribute("placeholder","Input Currency");
   row.appendChild(inputInEl)
   row.appendChild(currencyDropdownEl.cloneNode(true))
   var inputOutEl = inputInEl.cloneNode(true);
   inputInEl.setAttribute("placeholder","Output Currency");
   row.appendChild(inputOutEl)
   row.appendChild(currencyDropdownEl.cloneNode(true))
   if (isInitial === true) {
      var addTransactionButtonEl = document.createElement("DIV");
      var plusParagraphEl = document.createElement("P");
      var plusTextNode = document.createTextNode("+");
      addTransactionButtonEl.setAttribute("id","add-transaction-button");
      plusParagraphEl.appendChild(plusTextNode);
      addTransactionButtonEl.appendChild(plusParagraphEl);
      row.appendChild(addTransactionButtonEl);
      unorderedListEl.appendChild(row);
      addTransactionButtonEl.addEventListener("click", addRow);
      numRows += 1;
   }
   else {
      var removeTransactionButtonEl = document.createElement("DIV");
      var minusParagraphEl = document.createElement("P");
      var minusTextNode = document.createTextNode(" - ");
      removeTransactionButtonEl.setAttribute("class","remove-transaction-button")
      minusParagraphEl.appendChild(minusTextNode);
      removeTransactionButtonEl.appendChild(minusParagraphEl);
      row.appendChild(removeTransactionButtonEl);
      unorderedListEl.appendChild(row);
      removeTransactionButtonEl.addEventListener("click", removeRow);
   }
}

function removeRow(evt) {
this.parentElement.parentElement.removeChild(this.parentElement)
}
