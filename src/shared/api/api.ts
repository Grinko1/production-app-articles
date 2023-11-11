import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

export const $api = axios.create({
  baseURL: _API_,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
  }
});
