import { ListUsers } from '@/domain/usecases'

export namespace ListUsersRepository {
  export interface DTO {
    pageSize: number
    pageNumber: number
  }
  export interface Result {
    pageSize: number
    pageNumber: number
    pageCount: number
    entities: ListUsers.Result
  }
  export interface Repository {
    list(dto: DTO): Promise<Result>
  }
}
