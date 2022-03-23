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
	const ats = `- suprekiauta suma: ${profitAmount}`;
	return ats;
}

module.exports = profit;
