import { RequestAdapter } from '@/app/contracts/adapters'
import { DeleteQueues } from '@/domain/usecases'

import { badRequest, noContent, serverError } from '../helpers'
import { Gateway, HttpResponse, Validation } from '../protocols'

export class DeleteQueueController implements Gateway {
  constructor(
    private readonly validation: Validation,
    private readonly requestAdapter: RequestAdapter<DeleteQueues.Params>,
    private readonly deleteQueues: DeleteQueues
  ) {}

  async handle(request: DeleteQueuesController.Request): Promise<HttpResponse<any>> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      const requestFormatted = await this.requestAdapter.adapt(request)
      await this.deleteQueues.delete(requestFormatted)

      return noContent()
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}

export namespace DeleteQueuesController {
  export interface Request {
    file: any
  }
}
