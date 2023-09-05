import { CreateQueueRepository } from '@/app/contracts'

import { PlatformClient } from './platform-client'

export class QueueGenesysRepository implements CreateQueueRepository.Repository {
  private readonly routingApi = new PlatformClient().getRoutingApi()

  async create(dto: CreateQueueRepository.DTO): Promise<CreateQueueRepository.Result> {
    return await this.routingApi.postRoutingQueues(dto)
  }
}
