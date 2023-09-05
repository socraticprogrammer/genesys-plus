import { CreateQueue } from '@/domain/usecases'

export namespace CreateQueueRepository {
  export type DTO = CreateQueue.Params
  export type Result = CreateQueue.Result
  export interface Repository {
    create(dto: DTO): Promise<Result>
  }
}
