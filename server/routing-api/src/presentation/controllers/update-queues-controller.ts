import { RequestAdapter } from '@/app/contracts/adapters'
import { UpdateQueues } from '@/domain/usecases'

import { badRequest, noContent, serverError } from '../helpers'
import { Gateway, HttpResponse, Validation } from '../protocols'

export class UpdateQueueController implements Gateway {
  constructor(
    private readonly validation: Validation,
    private readonly requestAdapter: RequestAdapter<UpdateQueues.Params>,
    private readonly updateQueues: UpdateQueues
  ) {}

  async handle(request: UpdateQueuesController.Request): Promise<HttpResponse<any>> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      const requestFormatted = await this.requestAdapter.adapt(request)
      await this.updateQueues.Update(requestFormatted)

      return noContent()
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}

export namespace UpdateQueuesController {
  export interface Request {
    file: any
  }
}
