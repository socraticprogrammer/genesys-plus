import { CreateQueue } from '@/domain/usecases'

export namespace CreateQueueRepository {
  export type DTO = Omit<CreateQueue.Params, 'name'> & Required<Pick<CreateQueue.Params, 'name'>>
  export type Result = CreateQueue.Result
  export interface Repository {
    create(dto: DTO): Promise<Result>
  }
}
