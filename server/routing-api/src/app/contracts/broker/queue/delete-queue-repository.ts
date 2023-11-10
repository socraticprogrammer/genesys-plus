import { Queue } from '@/domain/models'
import { DeleteQueues } from '@/domain/usecases'

export namespace DeleteQueueRepository {
  export type DTO = DeleteQueues.DeleteQueueDTO
  export type Result = void
  export interface Repository {
    delete(dto: DTO): Promise<Result>
  }
}
