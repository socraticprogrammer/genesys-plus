import { Group } from '../models'

export interface ListGroups {
  list(): Promise<ListGroups.Result>
}

export namespace ListGroups {
  export type Result = Group[]
}
