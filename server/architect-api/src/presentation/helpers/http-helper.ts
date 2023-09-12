import { ServerError } from '../errors'
import { HttpResponse } from '../protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    error: error.name,
    message: error.message
  }
})

export const serverError = (error: Error, type?: string): HttpResponse => {
  const serverError = new ServerError(error.stack as string)
  return {
    statusCode: 500,
    body: {
      error: type ?? serverError.name
    }
  }
}

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})
