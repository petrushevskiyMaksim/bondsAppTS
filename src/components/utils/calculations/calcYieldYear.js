import { daysMaturity } from '../date/daysMaturity';

export function yieldYearIncome(bond) {
	const { nominalPrice, buyPrice, couponPrice, couponPeriod } = bond;
	const daysToMaturity = daysMaturity(bond);

	const result =
		((couponPrice * couponPeriod +
			(nominalPrice - buyPrice) / (daysToMaturity / 365)) /
			buyPrice) *
		100;

	return `${Math.floor(result * 100) / 100} % (${calcCouponRub(bond)} руб.)`;
}

export function calcCouponRub(bond) {
	const { nominalPrice, buyPrice, couponPrice, couponPeriod } = bond;
	const daysToMaturity = daysMaturity(bond);

	const result =
		((couponPrice * couponPeriod +
			(nominalPrice - buyPrice) / (daysToMaturity / 365)) /
			buyPrice) *
		buyPrice;
	return Math.floor(result * 100) / 100;
}
