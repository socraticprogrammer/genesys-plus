import { ListUsers } from '@/domain/usecases'

import { ok, serverError } from '../helpers'
import { Gateway, HttpResponse } from '../protocols'

export class ListUserController implements Gateway {
  constructor(private readonly listUsers: ListUsers) {}

  async handle(): Promise<HttpResponse<any>> {
    try {
      const result = await this.listUsers.list()

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
