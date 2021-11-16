import axios from "axios";
export class BaseService {
  url = "https://rickandmortyapi.com/api";
  api;

  constructor(path) {
    this.url += path;

    this.api = axios.create({
      baseURL: this.url,
    });
  }

  async getAll() {
    return await this.api.get(this.url);
  }

  async getById(id) {
    return await this.api.get(`${this.url}/${id}`);
  }

  async getByQuery(params) {
    return await this.api.get(this.url, {
      params,
    });
  }
}
