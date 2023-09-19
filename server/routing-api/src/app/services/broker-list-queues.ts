import { ListQueues } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { ListQueuesRepository } from '../contracts'
import { listQueuesWithPagination } from './helpers'

export class BrokerListQueues implements ListQueues {
  private readonly INITIAL_PAGE = 1
  private readonly PAGE_SIZE = 200

  constructor(
    private readonly platformClient: PlatformClient,
    private readonly queueRepository: ListQueuesRepository.Repository
  ) {}

  async list(): Promise<ListQueues.Result> {
    await this.platformClient.setup()
    const queues: ListQueues.Result = []
    const fetchQueues = listQueuesWithPagination(this.queueRepository)

    for await (const data of fetchQueues({
      pageNumber: this.INITIAL_PAGE,
      pageSize: this.PAGE_SIZE
    })) {
      queues.push(...data)
    }

    return queues
  }
}
