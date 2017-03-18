// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

var currencies = ["cad","usd","xbt","dash","eth"];
var addressList = [];
var addressInputEl = document.getElementById("addressInput");
var addAddressEl = addressInputEl.getElementsByTagName("A")[0];
addAddressEl.addEventListener("click", addRow);
var inputEl = addressInputEl.getElementsByTagName("INPUT")[0];
inputEl.addEventListener("keydown", isInput);
var addressOutputEl = document.getElementById("addressOutput");

//var JSONHistoryEl = document.getElementById("json-history");
//JSONHistoryEl.addEventListener("change", handleFiles);

function addRow(evt) {
   var address = this.parentElement.firstElementChild.value;
   addressList.push(address);
   addAddressToDom(address);
}

function isInput(evt) {
   if (evt.keyCode == 13) {
      addRow.call(this);
   }
}

function addAddressToDom(a) {
   var addressTextEl = document.createElement("P");
   addressTextEl.append(document.createTextNode(a));
   addressTextEl.setAttribute("class","address");
   //addressTextNode.setAttribute("class","address");
   addressOutputEl.appendChild(addressTextEl);
}

function handleFiles(event) {
   var file = event.target.files[0];
   var reader = new FileReader();
   reader.onload = function (event) {
      console.log(event.target.result)
      var jsonData = JSON.parse(event.target.result);
      console.log(jsonData);
   };
   reader.readAsText(file);
}

function logTransactions(event){
   //console.log("hey");
   //console.log(event);
   //console.log(event.target.result);
}

///////////// BELOW IS AN OLD SOLUTION BASED ON THE USER MANUALLY ENTERING EACH
///////////// TRANSACTION - This has been deprecated in favor of addresess
//var currencyDropdownEl = document.createElement("SELECT");
//var currencyOptions = [];
//for (c of currencies) {
   //var option = document.createElement("OPTION");
   //option.setAttribute("value", c);
   //option.text = c.toUpperCase();
   //currencyDropdownEl.add(option);
//}

//var renderPlotEl = document.getElementById("render-plot");
//renderPlotEl.addEventListener("click", drawChart);

//var numRows = 0;
//addRow(true); // Initialize

//var inOutList = [];

//function addRow(isInitial) {
   //var transactionsDivEl = document.getElementById("transactions");
   //var unorderedListEl = transactionsDivEl.firstElementChild;
   //var row = document.createElement("LI");
   //var inputInEl = document.createElement("INPUT");
   //inputInEl.setAttribute("type","text")
   //inputInEl.setAttribute("name","in"+parseInt(numRows))
   //inputInEl.setAttribute("placeholder","Input Currency");
   //row.appendChild(inputInEl)
   //row.appendChild(currencyDropdownEl.cloneNode(true))
   //var inputOutEl = inputInEl.cloneNode(true);
   //inputInEl.setAttribute("placeholder","Output Currency");
   //row.appendChild(inputOutEl)
   //row.appendChild(currencyDropdownEl.cloneNode(true))
   //var dateInput = document.createElement("input");
   //row.appendChild(dateInput);
   //dateInput.setAttribute("id","date"+parseInt(numRows));
   //if (isInitial === true) {
      //var addTransactionButtonEl = document.createElement("DIV");
      //var plusParagraphEl = document.createElement("P");
      //var plusTextNode = document.createTextNode("+");
      //addTransactionButtonEl.setAttribute("id","add-transaction-button");
      //plusParagraphEl.appendChild(plusTextNode);
      //addTransactionButtonEl.appendChild(plusParagraphEl);
      //row.appendChild(addTransactionButtonEl);
      //unorderedListEl.appendChild(row);
      //addTransactionButtonEl.addEventListener("click", addRow);
   //}
   //else {
      //var removeTransactionButtonEl = document.createElement("DIV");
      //var minusParagraphEl = document.createElement("P");
      //var minusTextNode = document.createTextNode(" - ");
      //removeTransactionButtonEl.setAttribute("class","remove-transaction-button")
      //minusParagraphEl.appendChild(minusTextNode);
      //removeTransactionButtonEl.appendChild(minusParagraphEl);
      //row.appendChild(removeTransactionButtonEl);
      //unorderedListEl.appendChild(row);
      //removeTransactionButtonEl.addEventListener("click", removeRow);
   //}
   //flatpickr("#date"+parseInt(numRows),{altInput:true,enableTime:true});
   //numRows += 1;
//}

//function removeRow(evt) {
   //this.parentElement.parentElement.removeChild(this.parentElement)
   //numRows -= 1;
//}


//// Callback that creates and populates a data table,
//// instantiates the pie chart, passes in the data and
//// draws it.
//function drawChart() {

   //// Create the data table.
   //var data = new google.visualization.DataTable();
   //data.addColumn('string', 'Topping');
   //data.addColumn('number', 'Slices');
   //data.addRows([
         //['Mushrooms', 3],
         //['Onions', 1],
         //['Olives', 1],
         //['Zucchini', 1],
         //['Pepperoni', 2]
   //]);

   //// Set chart options
   //var options = {'title':'How Much Pizza I Ate Last Night',
      //'width':600,
      //'height':300};

   //// Instantiate and draw our chart, passing in some options.
   //var chart = new google.visualization.PieChart(document.getElementById('chart'));
   //chart.draw(data, options);
//}
