import { Queue } from '../models'

export interface ListQueues {
  list(): Promise<ListQueues.Result>
}

export namespace ListQueues {
  export type Result = Pick<Queue, 'id' | 'name'>[]
}
