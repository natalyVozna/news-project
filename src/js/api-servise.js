import axios from 'axios';

export default class ApiServise {
  constructor() {
    this.page = 1;
  }

  fetchArticles() {
    const url = `https://63ee0ec0388920150dd83e3c.mockapi.io/news?page=${this.page}&l=5`;

    return axios.get(url).then(response => {
      this.page += 1;
      return response.data;
    });
  }

  resetPage() {
    this.page = 1;
  }
}
