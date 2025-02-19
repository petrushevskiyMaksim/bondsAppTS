export function calcCouponIncome(bond) {
	const num =
		((Number(bond.couponPrice) *
			(365 / Math.floor(365 / Number(bond.couponPeriod)))) /
			(Number(bond.buyPrice) +
				Number(bond.NKD) +
				Number(bond.buyPrice) * (Number(bond.brokerTax) / 100))) *
		100;

	return `${Math.floor(num * 100) / 100} % (${calcCouponRub(bond)} руб.)`;
}

export function calcCouponRub(bond) {
	const result =
		Number(bond.couponPrice) *
		(365 / Math.floor(365 / Number(bond.couponPeriod)));
	return `${Math.floor(result * 100) / 100}`;
}
