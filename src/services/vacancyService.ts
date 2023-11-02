import Axios from 'axios';

const axios = Axios.create({
  headers: {
    'X-RapidAPI-Key': 'e8b2feffb1msh3a99061305fd9f8p1d2e4ajsnc48a89be3b6b',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  },
});
export const vacancyService = {
  vacancies: [''],
  get: function () {
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: 'Python developer in Texas, USA',
        page: '1',
        num_pages: '1',
      },
    };
    return axios.request(options);
    // return axios.get('https://jsearch.p.rapidapi.com/search');
  },
  test: function () {
    this.vacancies.push('sdfsadf');
  },
};
