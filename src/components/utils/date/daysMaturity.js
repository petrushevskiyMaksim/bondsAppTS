export function daysMaturity(bond) {
	console.log(bond.buyAndSell);

	const dataDate = bond.buyAndSell;
	const dayBuy = dataDate[0].$d.getTime();
	const daySell = dataDate[1].$d.getTime();

	return (daySell - dayBuy) / 1000 / 60 / 60 / 24;
}
