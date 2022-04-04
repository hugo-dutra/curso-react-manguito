import { HttpPostParams, HttpResponse, HttpPostClient } from '@/data/protocols/http';
import axios from 'axios';

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResposne = await axios.post(params.url, params.body)
    return {
      statusCode: httpResposne.status,
      body: httpResposne.data
    }
  }

}