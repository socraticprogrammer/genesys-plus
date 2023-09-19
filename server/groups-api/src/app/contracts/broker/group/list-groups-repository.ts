import { ListGroups } from '@/domain/usecases'

export namespace ListGroupsRepository {
  export interface DTO {
    pageSize: number
    pageNumber: number
  }
  export interface Result {
    pageSize: number
    pageNumber: number
    pageCount: number
    entities: ListGroups.Result
  }
  export interface Repository {
    list(dto: DTO): Promise<Result>
  }
}
