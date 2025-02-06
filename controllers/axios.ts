import axios from "axios";
import { Platform } from "react-native";

// const API_URL = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';
const api = axios.create({
    baseURL: "https://humble-dane-fun.ngrok-free.app/",
    timeout: 5000,
  });
export default api;
// axios.interceptors.request.use(request => {
//     console.log('Starting Request', JSON.stringify(request, null, 2))
//     return request
// })

// axios.interceptors.response.use(response => {
//     console.log('Response:', JSON.stringify(response, null, 2))
//     return response
// })