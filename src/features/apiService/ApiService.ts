import { injectable } from "inversify";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosStatic,
} from "axios";
export const ApiServiceType = Symbol.for("ApiService");

@injectable()
class ApiService {
  axios: AxiosStatic;

  constructor() {
    this.axios = axios;
  }

  get<T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D> | undefined
  ): Promise<R> {
    return this.axios.get(url, config);
  }
}
export default ApiService;
