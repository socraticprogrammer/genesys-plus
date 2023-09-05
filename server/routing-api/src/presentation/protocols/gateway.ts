import { HttpResponse } from './http'

export interface Gateway<T = any> {
  handle(request: T): Promise<HttpResponse>
}
