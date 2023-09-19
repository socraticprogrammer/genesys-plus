import { ListGroupsRepository } from '@/app/contracts'

export const listGroupsWithPagination = (listGroups: ListGroupsRepository.Repository) =>
  async function* ({
    pageNumber,
    pageSize
  }: ListGroupsRepository.DTO): AsyncGenerator<ListGroupsRepository.Result['entities'], any, void> {
    let pagination: Omit<ListGroupsRepository.Result, 'entities'> = {
      pageNumber,
      pageSize,
      pageCount: 0
    }

    do {
      const result = await listGroups.list(pagination)

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
