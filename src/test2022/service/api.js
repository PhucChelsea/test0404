import axios from 'axios';

const getDataListCard = (filter) => {
	return axios({
		method: 'POST',
		url: `http://139.99.62.190:8000/api/v1/fund_projects/filter`,
		// headers: {
        //     'Content-Type': 'application/json'
		// },
		data: filter
	})
}
export const api = {
	getDataListCard
}