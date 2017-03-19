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
   socket.emit('keys', listofkeys);
	return false;
});
