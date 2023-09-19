import { RequestAdapter } from '@/app/contracts/adapters'
import { ListUsers } from '@/domain/usecases'

import { badRequest, ok, serverError } from '../helpers'
import { Gateway, HttpResponse, Validation } from '../protocols'

export class ListUsersWithFilterByEmailController implements Gateway {
  constructor(
    private readonly validation: Validation,
    private readonly requestAdapter: RequestAdapter<ListUsers.Params['usersEmails']>,
    private readonly listUsers: ListUsers
  ) {}

  async handle(request: ListUsersWithFilterByEmailController.Request): Promise<HttpResponse<any>> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      const requestFormatted = await this.requestAdapter.adapt(request)
      const result = await this.listUsers.list({
        usersEmails: requestFormatted
      })

      return ok({
        data: result,
        total: result?.length ?? 0,
        fileName: 'users'
      })
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}

export namespace ListUsersWithFilterByEmailController {
  export interface Request {
    file: any
  }
}
