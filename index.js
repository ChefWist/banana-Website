let order_amount;
document.getElementById("Sub").onclick = function(){
	order_amount = document.getElementById("QL").value
	document.getElementById("p").textContent = "You will receive "+order_amount+" bananas in a few days!"
} 