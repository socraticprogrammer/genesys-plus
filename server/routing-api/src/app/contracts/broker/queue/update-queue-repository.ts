import { Queue } from '@/domain/models'
import { UpdateQueues } from '@/domain/usecases'

export namespace UpdateQueueRepository {
  export type DTO = UpdateQueues.UpdateQueueDTO
  export type Result = Queue | undefined
  export interface Repository {
    update(dto: DTO): Promise<Result>
  }
}
