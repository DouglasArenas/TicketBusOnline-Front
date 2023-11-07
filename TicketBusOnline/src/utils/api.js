import axios from 'axios';

export const Instance = axios.create({
  baseURL: 'http://localhost:9000/',
});

export const baseURL = 'http://192.168.0.107:9000/';
