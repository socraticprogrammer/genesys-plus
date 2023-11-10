import {
  CreateQueueRepository,
  DeleteQueueRepository,
  ListQueuesRepository,
  UpdateQueueRepository
} from '@/app/contracts'

import { PlatformClient } from './platform-client'
import { formatListQueuesResponse } from './utils'

export class QueueGenesysRepository
  implements
    CreateQueueRepository.Repository,
    ListQueuesRepository.Repository,
    UpdateQueueRepository.Repository,
    DeleteQueueRepository.Repository
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

  async update({ id, ...dto }: UpdateQueueRepository.DTO): Promise<UpdateQueueRepository.Result> {
    try {
      const queue = await this.routingApi.putRoutingQueue(id, dto)
      return queue
    } catch (error) {
      console.error(error)
    }
  }

  async delete({ id }: DeleteQueueRepository.DTO): Promise<DeleteQueueRepository.Result> {
    try {
      await this.routingApi.deleteRoutingQueue(id)
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
      entities: result?.entities?.length ? formatListQueuesResponse(result.entities) : [],
      pageCount: result?.pageCount ?? 0,
      pageNumber: result?.pageNumber ?? 0,
      pageSize: result?.pageSize ?? 0
    }
  }
}
