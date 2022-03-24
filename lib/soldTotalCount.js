//funkcija, kuri skaiciuoja visu parduotu prekiu kieki

let = sold = 0;
function soldTotalCount(list) {
	for (const item of list) {
		sold += item.sold;
	}
	return "" + sold;
}

module.exports = soldTotalCount;
