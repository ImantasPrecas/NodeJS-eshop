//funkcija, kuri skaiciuoja visu parduotu prekiu kieki

let = sold = 0;
function soldTotalCount(list) {
	for (const item of list) {
		sold += item.sold;
	}
	const ats = `- parduotu prekiu: ${sold}`;
	return ats;
}

module.exports = soldTotalCount;
