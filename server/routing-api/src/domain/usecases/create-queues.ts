import { Queue } from '../models'

export interface CreateQueues {
  create(params: CreateQueues.Params): Promise<CreateQueues.Result>
}

export namespace CreateQueues {
  export type CreateQueueDTO = Omit<Queue, 'name'> & Required<Pick<Queue, 'name'>>

  export type Params = CreateQueueDTO[]

  export type Result = Queue[]
}
