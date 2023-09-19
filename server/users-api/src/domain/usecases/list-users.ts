import { User } from '../models'

export interface ListUsers {
  list(): Promise<ListUsers.Result>
}

export namespace ListUsers {
  export type Result = User[]
}
