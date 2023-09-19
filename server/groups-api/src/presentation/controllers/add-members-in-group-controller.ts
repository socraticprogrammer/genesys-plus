import { RequestAdapter } from '@/app/contracts/adapters'
import { AddMembersInGroup } from '@/domain/usecases'

import { badRequest, noContent, serverError } from '../helpers'
import { Gateway, HttpResponse, Validation } from '../protocols'

export class AddMembersInGroupController implements Gateway {
  constructor(
    private readonly validation: Validation,
    private readonly requestAdapter: RequestAdapter<AddMembersInGroup.Params['memberIds']>,
    private readonly addMembersInGroup: AddMembersInGroup
  ) {}

  async handle(request: AddMembersInGroupController.Request): Promise<HttpResponse<any>> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      const requestFormatted = await this.requestAdapter.adapt(request)
      await this.addMembersInGroup.add({
        memberIds: requestFormatted,
        groupId: request?.groupId
      })

      return noContent()
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }
}

export namespace AddMembersInGroupController {
  export interface Request {
    file: any
    groupId: string
  }
}
