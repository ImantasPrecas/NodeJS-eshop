let = totalCount = 0;
function inStockTotalCount(list) {
	for (const item of list) {
		totalCount = totalCount + item.inStock;
	}
	const ats = `- turimu prekiu sandelyje: ${totalCount}`;
	return ats;
}

module.exports = inStockTotalCount;
