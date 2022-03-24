// funkcija kuri skaiciuoja uzdirbtu pinigu kieki

let = profitAmount = 0;
let currency = "";
function profit(list) {
	for (const item of list) {
		itemAmount = item.sold * item.price.value;
		profitAmount += itemAmount;
		const { name, price } = item;
		currency = price.currency;
	}
	return "" + profitAmount;
}

module.exports = profit;
