import axios, { AxiosRequestConfig } from "axios";

class ApiClient {
  private authToken: string | null;
  private headers: any;

  constructor() {
    this.authToken = null;
    this.headers = { "Content-Type": "application/json;charset=UTF-8" };
  }

  private async request<T>(url: string, method: string, data?: any): Promise<T> {
    if (this.authToken) {
      this.headers.Authorization = `Bearer ${this.authToken}`;
    }

    const config: AxiosRequestConfig = {
      method,
      url: `${process.env.REACT_APP_API_URL}/${url}`,
      headers: this.headers,
      responseType: "json",
    };
    method === "GET" && data ? (config.params = data) : (config.data = data);
    return axios(config);
  }

  public get<T>(url: string, data: any): Promise<T> {
    return this.request(url, "GET", data);
  }

  public postJson<T>(url: string, data: any): Promise<T> {
    return this.request(url, "POST", data);
  }

  public postFormData<T>(url: string, formData: FormData): Promise<T> {
    this.headers = { "Content-Type": "multipart/form-data" };
    return this.request(url, "POST", formData);
  }

  public delete<T>(url: string, data: any): Promise<T> {
    return this.request(url, "DELETE", data);
  }

  public put<T>(url: string, data: any): Promise<T> {
    return this.request(url, "PUT", data);
  }

  public setAuthToken(token: string | null): void {
    this.authToken = token;
  }
}

export default new ApiClient();
