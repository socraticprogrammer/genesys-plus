import { Group } from '@/domain/models'

export namespace GetGroupRepository {
  export interface DTO {
    groupId: string
  }
  export type Result = Group | undefined

  export interface Repository {
    get(params: DTO): Promise<Result>
  }
}
