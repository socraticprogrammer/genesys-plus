import { User } from '../models'

export interface ListUsers {
  list(params?: ListUsers.Params): Promise<ListUsers.Result>
}

export namespace ListUsers {
  export interface Params {
    usersEmails: string[]
  }
  export type Result = User[]
}
