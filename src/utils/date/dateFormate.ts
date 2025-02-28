import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

export function dateFormate(date) {
	if (Array.isArray(date)) {
		const formateDateStart = date[0].format('DD-MM MMMM-YYYY');
		const formateDateEnd = date[1].format('DD-MM MMMM-YYYY');

		return `${formateDateStart} / ${formateDateEnd}`;
	} else {
		const formateDate = date.format('DD-MM MMMM-YYYY');

		return `${formateDate}`;
	}
}

export function dateFormateMy(date) {
	if (Array.isArray(date)) {
		const formateDateStart = moment(date[0]).format('DD-MM MMMM-YYYY');
		const formateDateEnd = moment(date[1]).format('DD-MM MMMM-YYYY');

		return `${formateDateStart} / ${formateDateEnd}`;
	} else {
		const formateDate = moment(date).format('DD-MM MMMM-YYYY');

		return `${formateDate}`;
	}
}
