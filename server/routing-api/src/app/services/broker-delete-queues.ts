import { DeleteQueues } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { DeleteQueueRepository } from '../contracts'

export class BrokerDeleteQueues implements DeleteQueues {
  constructor(
    private readonly platformClient: PlatformClient,
    private readonly queueRepository: DeleteQueueRepository.Repository
  ) {}

  async delete(params: DeleteQueues.Params): Promise<DeleteQueues.Result> {
    await this.platformClient.setup()
    if (!params?.length) return []
    await Promise.all(params.map(queue => this.queueRepository.delete(queue)))
    return params.map(({ id }) => id)
  }
}
