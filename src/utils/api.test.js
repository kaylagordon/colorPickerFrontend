import { apiRequest } from '../utils/api';

describe('api', () => {
  describe('apiRequest', () => {
    const mockOptions = {
      method: 'GET',
      body: JSON.stringify('test'),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    };
    const mockResponse = { url: "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/calgary", mockOptions };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch GET with the correct param', async () => {
      await apiRequest('https://palettepickerapp.herokuapp.com/api/v1/', 'GET');
      expect(window.fetch).toHaveBeenCalled();
    });

    it('should call fetch DELETE with the correct param', async () => {
      const mockData = {name: 'Kaylawoo', id: '3'};

      await apiRequest('https://palettepickerapp.herokuapp.com/api/v1/', 'DELETE', mockData);
      expect(window.fetch).toHaveBeenCalled();
    });

    it('should call fetch POST with the correct param', async () => {
      const mockData = {name: 'Kaylawoo', id: '3'};
      
      await apiRequest('https://palettepickerapp.herokuapp.com/api/v1/projects', 'POST', mockData);
      expect(window.fetch).toHaveBeenCalled();
    });
  });
});