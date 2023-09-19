import type { Request, Response } from 'express'

import { Gateway } from '@/presentation/protocols'

interface ErrorResult {
  error: {
    type: string
    message: string
  }
}

type AdapterRequest = Request & {
  file?: any
}

export type ExpressController<T = any> = (req: AdapterRequest, res: Response) => Promise<T>

const generateError = (type: string, message: string): ErrorResult => ({
  error: {
    type,
    message
  }
})

export const adaptRoute =
  (controller: Gateway): ExpressController =>
  async (req: AdapterRequest, res: Response) => {
    const request = {
      ...(req.query ?? {}),
      ...(req.body ?? {}),
      ...(req.params ?? {}),
      file: req?.file
    }

    const httpResponse = await controller.handle(request)

    return res
      .status(httpResponse.statusCode)
      .json(
        httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299
          ? httpResponse.body
          : generateError(httpResponse.body?.error, httpResponse.body?.message)
      )
  }
