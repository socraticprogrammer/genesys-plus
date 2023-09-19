import { Queue } from '@/domain/models'
import { ListQueues } from '@/domain/usecases'

export namespace ListQueuesRepository {
  export interface DTO {
    pageSize: number
    pageNumber: number
  }
  export type BrokerResult = Pick<Queue, 'name' | 'id' | 'division'>[]
  export interface Result {
    pageSize: number
    pageNumber: number
    pageCount: number
    entities: ListQueues.Result
  }
  export interface Repository {
    list(dto: DTO): Promise<Result>
  }
}
