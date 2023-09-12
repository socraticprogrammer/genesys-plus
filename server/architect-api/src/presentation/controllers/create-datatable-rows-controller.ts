import { RequestAdapter } from '@/app/contracts/adapters'
import { CreateDataTableRows } from '@/domain/usecases'

import { badRequest, noContent, serverError } from '../helpers'
import { Gateway, HttpResponse, Validation } from '../protocols'

export class CreateDataTableRowsController implements Gateway {
  constructor(
    private readonly validation: Validation,
    private readonly requestAdapter: RequestAdapter<CreateDataTableRows.Params>,
    private readonly createDataTableRows: CreateDataTableRows
  ) {}

  async handle(request: CreateDataTableRowsController.Request): Promise<HttpResponse<any>> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      const requestFormatted = await this.requestAdapter.adapt(request)
      await this.createDataTableRows.create(requestFormatted)

      return noContent()
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}

export namespace CreateDataTableRowsController {
  export interface Request {
    file: any
  }
}
