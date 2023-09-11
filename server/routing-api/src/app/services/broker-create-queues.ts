import { CreateQueues } from '@/domain/usecases'

import { CreateQueueRepository } from '../contracts'

export class BrokerCreateQueues implements CreateQueues {
  constructor(private readonly queueRepository: CreateQueueRepository.Repository) {}

  async create(params: CreateQueues.Params): Promise<CreateQueues.Result> {
    if (!params?.length) return []
    return await Promise.all(params.map(queue => this.queueRepository.create(queue)))
  }
}
