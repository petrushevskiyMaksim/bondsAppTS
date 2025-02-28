export const calcCost = bonds => {
	let totalCost = 0; // Переменная для хранения общей суммы затрат
	bonds.forEach(bond => {
		const procent = bond.buyPrice * (bond.brokerTax / 100);
		const result =
			bond.sumBonds *
			(Number(bond.buyPrice) + Number(procent) + Number(bond.NKD));
		totalCost += result; // Суммируем затраты
	});
	return totalCost;
};
