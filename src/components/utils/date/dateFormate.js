import { getMonthName } from './dateName';

export function dateFormate(date) {

	if (Array.isArray(date)) {
		const dataDateBuy = date[0].$d;
		const dataDateSell = date[1].$d;

		const dayBuy = dataDateBuy.getDate().toString().padStart(2, '0');
		const monthBuy = (dataDateBuy.getMonth() + 1).toString().padStart(2, '0');
		const monthBuyNumber = dataDateBuy.getMonth() + 1;
		const yearBuy = dataDateBuy.getFullYear().toString();

		const daySell = dataDateSell.getDate().toString().padStart(2, '0');
		const monthSell = (dataDateSell.getMonth() + 1).toString().padStart(2, '0');
		const monthSellNumber = dataDateSell.getMonth() + 1;
		const yearSell = dataDateSell.getFullYear().toString();

		const monthStringViewBuy = getMonthName(monthBuyNumber);
		const monthStringViewSell = getMonthName(monthSellNumber);

		const dateFormate = `${dayBuy}-${monthBuy}(${monthStringViewBuy})-${yearBuy} / ${daySell}-${monthSell}(${monthStringViewSell})-${yearSell}`;

		return dateFormate;
	} else {
		const dataDateCoupon = date.$d;

		const day = dataDateCoupon.getDate().toString().padStart(2, '0');
		const monthNumber = dataDateCoupon.getMonth() + 1;
		const month = (dataDateCoupon.getMonth() + 1).toString().padStart(2, '0');
		const year = dataDateCoupon.getFullYear().toString();

		const monthStringView = getMonthName(monthNumber);

		const dateFormate = `${day}-${month}(${monthStringView})-${year}`;

		return dateFormate;
	}
}
