import axios from 'axios'

export const instanceApi = axios.create({
	baseURL: 'https://localhost:7013',
})
