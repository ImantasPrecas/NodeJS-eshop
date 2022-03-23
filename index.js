const jsonParse = require("./lib/jsonParse.js");
const printList = require("./lib/printList.js");
const readFile = require("./lib/readFile.js");
const inStockTotalcount = require("./lib/inStockTotalcount.js");
const IsValid = require("./lib/isValid.js");
const soldTotalCount = require("./lib/soldTotalCount.js");
const profit = require("./lib/profit.js");
const futureProfit = require("./lib/futureProfit.js");

(async () => {
	const goods = [
		"arbata",
		"arba",
		"kvepalai",
		"masina",
		"masina-wrong-1",
		"masina-wrong-2",
		"masina-wrong-3",
		"masina-wrong-4",
		"masina-wrong-5",
		"masina-wrong-6",
		"masina-wrong-7",
		"masina-wrong-8",
		"masina-wrong-9",
		"masina-wrong-10",
		"masina-wrong-11",
		"masina-wrong-12",
		"masina-wrong-13",
		"masina-wrong-14",
		"masina-wrong-15",
		"masina-wrong-16",
		"masina-wrong-17",
		"masina-wrong-18",
		"masina-wrong-19",
		"masina-wrong-20",
		"masina-wrong-21",
		"masina-wrong-22",
		"masina-wrong-23",
		"masina-wrong-24",
		"masina-wrong-25",
		"masina-wrong-26",
		"masina-wrong-27",
		"masina-wrong-28",
		"masina-wrong-29",
		"masina-wrong-30",
		"pomidoras",
		"masina-wrong-31",
		"masina-wrong-32",
		"masina-wrong-33",
		"masina-wrong-34",
		"masina-wrong-35",
		"masina-wrong-36",
		"",
		5,
		true,
		false,
		// null,
		() => {},
		[],
		{},
		// undefined,
		"masina-wrong-37",
	];

	const availableCurrency = ["Eur", "Usd", "Lit"];
	const goodsInfo = [];

	for (const item of goods) {
		//gateKeeperiai
		if (typeof item !== "string" || item === "") {
			continue;
		}
		const itemText = await readFile(item);
		if (typeof itemText !== "string" || itemText === "") {
			continue;
		}
		const itemObj = jsonParse(itemText);
		if (itemObj === false) {
			continue;
		}

		const { name, price, inStock, sold } = itemObj;
		if (
			!IsValid.correctObject(itemObj, 4) ||
			!IsValid.nonEmptyString(name) ||
			!IsValid.correctObject(price, 2) ||
			!IsValid.nonNegativeNumber(price.value) ||
			!IsValid.nonEmptyString(price.currency) ||
			!availableCurrency.includes(price.currency) ||
			!IsValid.nonNegativeInteger(inStock) ||
			!IsValid.nonNegativeInteger(sold)
		) {
			continue;
		}

		goodsInfo.push(itemObj);
	}

	console.log('"Univermagas" pardavime turi:');
	console.log("------------------------------");
	console.log(printList(goodsInfo));
	console.log("------------------------------");
	console.log("Parduotuves suvestine:");
	console.log("------------------------------");

	console.log(inStockTotalcount(goodsInfo));
	console.log(soldTotalCount(goodsInfo));
	console.log(profit(goodsInfo), ` Eur`);
	console.log(futureProfit(goodsInfo), ` Eur`);

	console.log(
		` - maksimali galima parduotuves apyvarta: [total pinigu] [valiuta]`
	);
})();
