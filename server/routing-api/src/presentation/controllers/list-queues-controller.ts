import { ListQueues } from '@/domain/usecases'

import { ok, serverError } from '../helpers'
import { Gateway, HttpResponse } from '../protocols'

export class ListQueueController implements Gateway {
  constructor(private readonly listQueues: ListQueues) {}

  async handle(): Promise<HttpResponse<any>> {
    try {
      const result = await this.listQueues.list()

      return ok({
        queues: result
      })
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}
