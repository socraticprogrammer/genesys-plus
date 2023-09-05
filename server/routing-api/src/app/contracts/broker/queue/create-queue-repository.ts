import { Queue } from '@/domain/models'
import { CreateQueues } from '@/domain/usecases'

export namespace CreateQueueRepository {
  export type DTO = CreateQueues.CreateQueueDTO
  export type Result = Queue
  export interface Repository {
    create(dto: DTO): Promise<Result>
  }
}
