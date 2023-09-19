import { ListUsersRepository } from '@/app/contracts'

export const listUsersWithPagination = (listUsers: ListUsersRepository.Repository) =>
  async function* ({
    pageNumber,
    pageSize
  }: ListUsersRepository.DTO): AsyncGenerator<ListUsersRepository.Result['entities'], any, void> {
    let pagination: Omit<ListUsersRepository.Result, 'entities'> = {
      pageNumber,
      pageSize,
      pageCount: 0
    }

    do {
      const result = await listUsers.list(pagination)

      if (!result?.entities?.length) break

      const { entities, ...paginationResult } = result
      yield entities
      pagination = {
        pageNumber: paginationResult.pageNumber + 1,
        pageSize: paginationResult.pageSize,
        pageCount: paginationResult.pageCount
      }
    } while (pagination.pageNumber <= pagination.pageCount)
  }
