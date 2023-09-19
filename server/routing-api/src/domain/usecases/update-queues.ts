import { Queue } from '../models'

export interface UpdateQueues {
  Update(params: UpdateQueues.Params): Promise<UpdateQueues.Result>
}

export namespace UpdateQueues {
  export type UpdateQueueDTO = Partial<Omit<Queue, 'name'>> & Required<Pick<Queue, 'name' | 'id'>>

  export type Params = UpdateQueueDTO[]

  export type Result = Queue[]
}
