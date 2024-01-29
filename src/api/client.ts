import axios from 'axios';
import {BASE_URL} from './apiUrls';

export const axiosClient = axios.create({baseURL: BASE_URL});
