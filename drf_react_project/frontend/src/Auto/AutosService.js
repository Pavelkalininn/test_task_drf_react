import axios from 'axios';
const API_URL = 'http://localhost:8000';


export default class AutosService{

	getAutos() {
		const url = `${API_URL}/api/v1/cars`;
		return axios.get(url).then(response => response.data);
	}
	getAutosByURL(link){
		const url = `${API_URL}${link}`;
		return axios.get(url).then(response => response.data);
	}
	getAuto(pk) {
		const url = `${API_URL}/api/v1/cars/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	deleteAuto(car){
		const url = `${API_URL}/api/v1/cars/${car.pk}`;
		return axios.delete(url);
	}
	createAuto(car){
		const url = `${API_URL}/api/v1/cars`;
		return axios.post(url,car);
	}
	updateAuto(car){
		const url = `${API_URL}/api/v1/car/${car.pk}`;
		return axios.put(url,car);
	}
}
