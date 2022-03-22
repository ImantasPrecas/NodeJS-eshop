// funkcija kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

function printList(list) {
	const availableCurrency = ["Eur", "Usd", "Lit"];
	let table = [];

	let i = 0;
	for (const item of list) {
		if (
			!item ||
			Object.keys(item).length !== 4 ||
			!item.name ||
			typeof item.name !== "string" ||
			item.name.trim() === "" ||
			!item.price ||
			typeof item.price !== "object" ||
			Object.keys(item.price).length !== 2 ||
			typeof item.price.value !== "number" ||
			item.price.value < 0 ||
			!isFinite(item.price.value) ||
			!item.price.currency ||
			typeof item.price.currency !== "string" ||
			item.price.currency.trim() === "" ||
			!availableCurrency.includes(item.price.currency) ||
			typeof item.inStock !== "number" ||
			item.inStock % 1 !== 0 ||
			item.inStock < 0 ||
			!isFinite(item.inStock) ||
			item.sold % 1 !== 0 ||
			item.sold < 0 ||
			!isFinite(item.sold) ||
			typeof item.sold !== "number"
		) {
			continue;
		}

		table.push(
			`${++i}) ${item.name}: ${item.price.value} ${
				item.price.currency
			}; parduota: ${item.sold}; likutis: ${item.inStock};`
		);
	}
	//

	return table.join("\n");
}

module.exports = printList;
