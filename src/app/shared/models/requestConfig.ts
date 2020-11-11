export class RequestConfig {
  method: string;
  url: string;
  params: any;
  data: any;
  headers: any;

  constructor(methodParam: string, urlParam: string) {
    this.method = methodParam;
    this.url = urlParam;
  }

  setParams(paramsParam: any): void {
    this.params = paramsParam;
  }

  setData(dataParam: any): void {
    this.data = dataParam;
  }

  setHeaders(headersParam: any): void {
    this.headers = headersParam;
  }
}
