import axios from 'axios';
const API_URL = 'http://localhost:8000';
const header = { headers : {
'Access-Control-Allow-OriginAL': 'http://localhost:3000',
'Content-Type': 'application/json',
'Access-Control-Allow-Credentials': 'true',
'Access-Control-Max-Age': '60',
'Access-Control-Allow-Headers': 'AccountKey,x-requested-with, Content-Type, origin, authorization, accept, client-security-token, host, date, cookie, cookie2',
'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
} }


export default class AutosService{

	getAutos() {
		const url = `${API_URL}/api/v1/cars`;
		return axios.get(url, header).then(response => response.data);
	}
	getAutosByURL(link){
		const url = `${API_URL}${link}`;
		return axios.get(url, header).then(response => response.data);
	}
	getAuto(pk) {
		const url = `${API_URL}/api/v1/cars/${pk}`;
		return axios.get(url, header).then(response => response.data);
	}
	deleteAuto(car){
		const url = `${API_URL}/api/v1/cars/${car.pk}`;
		return axios.delete(url, header);
	}
	createAuto(car){
		const url = `${API_URL}/api/v1/cars`;
		return axios.post(url,car, header);
	}
	updateAuto(car){
		const url = `${API_URL}/api/v1/car/${car.pk}`;
		return axios.put(url,car, header);
	}
}
