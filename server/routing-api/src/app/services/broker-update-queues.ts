import { UpdateQueues } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { UpdateQueueRepository } from '../contracts'

export class BrokerUpdateQueues implements UpdateQueues {
  constructor(
    private readonly platformClient: PlatformClient,
    private readonly queueRepository: UpdateQueueRepository.Repository
  ) {}

  async Update(params: UpdateQueues.Params): Promise<UpdateQueues.Result> {
    await this.platformClient.setup()
    if (!params?.length) return []
    const queuesUpdated = await Promise.all(params.map(queue => this.queueRepository.update(queue)))
    return queuesUpdated.filter(queueUpdated => Boolean(queueUpdated)) as UpdateQueues.Result
  }
}
