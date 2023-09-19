import { ListUsers } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { ListUsersRepository } from '../contracts'
import { listUsersWithPagination } from './helpers'
import { filterUsersWithEmails } from './helpers/response-helper'

export class BrokerListUsers implements ListUsers {
  private readonly INITIAL_PAGE = 1
  private readonly PAGE_SIZE = 200

  constructor(
    private readonly platformClient: PlatformClient,
    private readonly UserRepository: ListUsersRepository.Repository
  ) {}

  async list(params?: ListUsers.Params): Promise<ListUsers.Result> {
    await this.platformClient.setup()
    const users: ListUsers.Result = []
    const fetchUsers = listUsersWithPagination(this.UserRepository)

    for await (const data of fetchUsers({
      pageNumber: this.INITIAL_PAGE,
      pageSize: this.PAGE_SIZE
    })) {
      users.push(...data)
    }

    return params?.usersEmails?.length
      ? filterUsersWithEmails(users, params?.usersEmails ?? [])
      : users
  }
}
