import { config } from '../constants/config';
import axios from 'axios';

export const httpBaseUtil = axios.create({
  baseURL: config.API_BASE_URL,
  params: { api_key: config.API_KEY },
  responseType: 'json',
});
