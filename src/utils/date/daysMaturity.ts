export function daysMaturity(bond) {
	const dayBuy = bond.buyDate;
	const daySell = bond.sellDate;

	return ((daySell - dayBuy) / 1000 / 60 / 60 / 24).toFixed();
}
