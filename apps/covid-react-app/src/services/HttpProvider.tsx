import { environment } from '../environments/environment';

const BASE_QUERY_URL = environment.url + environment.api;

const HttpService = () => {
  const link = document.createElement('a');
  link.href = '/auth/login'; //si es en browser solo es /auth/login

  return {
    get: (route: string) => {
      return fetch(BASE_QUERY_URL + route, {}).then((response: any) => {
        return response.json();
      });
    }
  };
};

export default HttpService;
