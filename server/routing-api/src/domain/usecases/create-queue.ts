import { Queue } from '../models'

export interface CreateQueue {
  create(params: CreateQueue.Params): Promise<CreateQueue.Result>
}

export namespace CreateQueue {
  export type Params = Queue

  export type Result = Queue
}
