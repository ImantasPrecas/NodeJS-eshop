// funkcija kuri apskaiciuoja uz kiek dar galima suprekiauti is likusiu prekiu

let = futureProfitAmount = 0;
let currency = "";
function futureProfit(list) {
	for (const item of list) {
		itemAmount = item.inStock * item.price.value;
		futureProfitAmount += itemAmount;
		const { name, price } = item;
		currency = price.currency;
	}
	const ats = `- galimu pardavimu: ${futureProfitAmount}`;
	return ats;
}

module.exports = futureProfit;
