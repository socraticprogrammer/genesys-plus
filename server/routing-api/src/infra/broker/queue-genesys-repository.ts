import { CreateQueueRepository, ListQueuesRepository } from '@/app/contracts'

import { PlatformClient } from './platform-client'

export class QueueGenesysRepository
  implements CreateQueueRepository.Repository, ListQueuesRepository.Repository
{
  private readonly routingApi = new PlatformClient().getRoutingApi()

  async create(dto: CreateQueueRepository.DTO): Promise<CreateQueueRepository.Result> {
    try {
      const queue = await this.routingApi.postRoutingQueues(dto)
      return queue
    } catch (error) {
      console.error(error)
    }
  }

  async list({
    pageNumber,
    pageSize
  }: ListQueuesRepository.DTO): Promise<ListQueuesRepository.Result> {
    const result = await this.routingApi.getRoutingQueues({
      pageNumber,
      pageSize
    })

    return {
      entities: result?.entities ?? [],
      pageCount: result?.pageCount ?? 0,
      pageNumber: result?.pageNumber ?? 0,
      pageSize: result?.pageSize ?? 0
    }
  }
}
