export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface ApiInterface {
  setMethod(method: Method): this
  addHeader(key: string, value: string): this
  removeHeader(key: string): this
  retrieve<T>(url: string, data?: unknown): Promise<T>
}
