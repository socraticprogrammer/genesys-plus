import { ListUsersRepository } from '@/app/contracts'

import { PlatformClient } from './platform-client'
import { formatListUsersResponse } from './utils'

export class UserGenesysRepository implements ListUsersRepository.Repository {
  private readonly usersApi = new PlatformClient().getUsersApi()

  async list({
    pageNumber,
    pageSize
  }: ListUsersRepository.DTO): Promise<ListUsersRepository.Result> {
    const result = await this.usersApi.getUsers({
      pageNumber,
      pageSize
    })

    return {
      entities: result?.entities?.length ? formatListUsersResponse(result.entities) : [],
      pageCount: result?.pageCount ?? 0,
      pageNumber: result?.pageNumber ?? 0,
      pageSize: result?.pageSize ?? 0
    }
  }
}
