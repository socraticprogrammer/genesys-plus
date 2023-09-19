import { Queue } from '../models'

export interface ListQueues {
  list(): Promise<ListQueues.Result>
}

export namespace ListQueues {
  export type QueueWithDivision = Pick<Queue, 'id' | 'name'> & {
    divisionId: string
  }
  export type Result = QueueWithDivision[]
}
