import { Queue } from '../models'

export interface DeleteQueues {
  delete(params: DeleteQueues.Params): Promise<DeleteQueues.Result>
}

export namespace DeleteQueues {
  export type DeleteQueueDTO = Required<Pick<Queue, 'id'>>

  export type Params = DeleteQueueDTO[]

  export type Result = string[]
}
