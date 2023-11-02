import Axios, { AxiosResponse } from 'axios';
import { Vacancy } from '../types';
import { RapidApiResponse } from '../types';

const axios = Axios.create({
  baseURL: 'https://jsearch.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'e8b2feffb1msh3a99061305fd9f8p1d2e4ajsnc48a89be3b6b',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  },
});
export const vacancyService = {
  get: function (query: string): Promise<AxiosResponse<RapidApiResponse<Vacancy[]>>> {
    return axios.get<RapidApiResponse<Vacancy[]>>('/search', {
      params: {
        query: query,
        page: '1',
        num_pages: '1',
      },
    });
  },
};
