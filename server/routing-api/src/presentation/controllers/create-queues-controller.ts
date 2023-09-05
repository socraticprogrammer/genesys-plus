import { CreateQueues } from '@/domain/usecases'

import { badRequest, noContent, serverError } from '../helpers'
import { Gateway, HttpResponse, Validation } from '../protocols'

export class CreateQueueController implements Gateway {
  constructor(
    private readonly validation: Validation,
    private readonly createQueues: CreateQueues
  ) {}

  async handle(request: CreateQueuesController.Request): Promise<HttpResponse<any>> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      return noContent()
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}

export namespace CreateQueuesController {
  export interface Request {
    file: any
  }
}
