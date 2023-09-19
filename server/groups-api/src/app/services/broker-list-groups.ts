import { ListGroups } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { ListGroupsRepository } from '../contracts'
import { listGroupsWithPagination } from './helpers'

export class BrokerListGroups implements ListGroups {
  private readonly INITIAL_PAGE = 1
  private readonly PAGE_SIZE = 200

  constructor(
    private readonly platformClient: PlatformClient,
    private readonly GroupRepository: ListGroupsRepository.Repository
  ) {}

  async list(): Promise<ListGroups.Result> {
    await this.platformClient.setup()
    const groups: ListGroups.Result = []
    const fetchGroups = listGroupsWithPagination(this.GroupRepository)

    for await (const data of fetchGroups({
      pageNumber: this.INITIAL_PAGE,
      pageSize: this.PAGE_SIZE
    })) {
      groups.push(...data)
    }

    return groups
  }
}
