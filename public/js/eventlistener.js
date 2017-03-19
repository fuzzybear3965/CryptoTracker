var addkey_el = document.getElementById("addkey");
addkey_el.addEventListener("click", addkey);

var dom = document.getElementById("listofkeys");

var listofkeys = [];

function addkey(evt){
	var curr = document.getElementById("curr");
	var key = document.getElementById("pubkey");
	//alert(cur.value+pubkey.value);
	console.log(evt);
	listofkeys.push({
		"pubkey":pubkey.value,
		"curr":curr.value});
	//dom.value = listofkeys;
	var addressTextEl = document.createElement("P");
	addressTextEl.innerHTML = listofkeys;
   //addressTextEl.append(document.createTextNode(a));
   addressTextEl.setAttribute("class","address");
   //addressTextNode.setAttribute("class","address");
   dom.appendChild(addressTextEl);
}

var submitEl = document.getElementById("submit");
submitEl.addEventListener("click",function(){
	socket.emit('chat message', JSON.stringify(listofkeys));
	return false;
});
// var formEl = document.getElementById("keyadd");
// submitEl.addEventListener("click",post);

// function post() {
// 	 var method ="post"; // Set method to post by default if not specified.

//     // The rest of this code assumes you are not using a library.
//     // It can be made less wordy if you use one.
//     var form = document.createElement("form");
//     form.setAttribute("method", method);
//     form.setAttribute("action", "/");
//     params = listofkeys;

//     for(var key in params) {	
//         if(params.hasOwnProperty(key)) {
//             var hiddenField = document.createElement("input");
//             hiddenField.setAttribute("type", "hidden");
//             hiddenField.setAttribute("name", "name");
//             hiddenField.setAttribute("id", "name");
//             hiddenField.setAttribute("value", key.curr);

//             form.appendChild(hiddenField);
//          }
//     }

//     document.body.appendChild(form);
//     form.submit();
// }