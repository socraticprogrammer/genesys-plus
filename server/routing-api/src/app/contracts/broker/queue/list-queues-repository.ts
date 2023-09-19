import { ListQueues } from '@/domain/usecases'

export namespace ListQueuesRepository {
  export type Result = ListQueues.Result
  export interface Repository {
    list(): Promise<Result>
  }
}
