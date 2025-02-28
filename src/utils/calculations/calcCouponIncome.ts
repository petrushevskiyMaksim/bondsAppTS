import { daysMaturity } from '../date/daysMaturity';

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
	const daysToMaturity = daysMaturity(bond);
	const quantityCouponYear = 365 / Math.floor(365 / Number(bond.couponPeriod));
	const yearsToMaturity = Number(daysToMaturity) / 365;
	

	let result;

	if (yearsToMaturity >= 1) {
		result =
			(Number(bond.couponPrice) * 365) /
			Math.floor(365 / Number(bond.couponPeriod));
	} else {
		result =
			Number(bond.couponPrice) *
			(Number(Math.floor(yearsToMaturity * quantityCouponYear)) + 1);
	}

	
	return `${Math.floor(result * 100) / 100}`;
}
