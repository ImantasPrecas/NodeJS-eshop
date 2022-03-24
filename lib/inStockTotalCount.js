let = totalCount = 0;
function inStockTotalCount(list) {
	for (const item of list) {
		totalCount = totalCount + item.inStock;
	}

	return "" + totalCount;
}

module.exports = inStockTotalCount;
