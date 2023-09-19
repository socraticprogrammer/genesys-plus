import { CreateQueues } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { CreateQueueRepository } from '../contracts'

export class BrokerCreateQueues implements CreateQueues {
  constructor(
    private readonly platformClient: PlatformClient,
    private readonly queueRepository: CreateQueueRepository.Repository
  ) {}

  async create(params: CreateQueues.Params): Promise<CreateQueues.Result> {
    await this.platformClient.setup()
    if (!params?.length) return []
    const queuesCreated = await Promise.all(params.map(queue => this.queueRepository.create(queue)))
    return queuesCreated.filter(queueCreated => Boolean(queueCreated)) as CreateQueues.Result
  }
}
