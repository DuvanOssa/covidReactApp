import HttpService from '../HttpProvider';

class HomeService {
  getSummary() {
    return HttpService().get('/summary');
  }
}

export default new HomeService();
