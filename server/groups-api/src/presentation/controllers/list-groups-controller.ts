import { ListGroups } from '@/domain/usecases'

import { ok, serverError } from '../helpers'
import { Gateway, HttpResponse } from '../protocols'

export class ListGroupsController implements Gateway {
  constructor(private readonly listGroups: ListGroups) {}

  async handle(): Promise<HttpResponse<any>> {
    try {
      const result = await this.listGroups.list()

      return ok({
        data: result,
        total: result?.length ?? 0,
        fileName: 'groups'
      })
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}
