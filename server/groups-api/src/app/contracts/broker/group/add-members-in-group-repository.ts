import { Group } from '@/domain/models'
import { AddMembersInGroup } from '@/domain/usecases'

export namespace AddMembersInGroupRepository {
  export type DTO = AddMembersInGroup.AddMembersInGroupDTO & {
    version: number
  }
  export type Result = Group | undefined
  export interface Repository {
    addMembers(dto: DTO): Promise<Result>
  }
}
