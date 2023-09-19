import { ListQueuesRepository } from '@/app/contracts'

export const listQueuesWithPagination = (listQueues: ListQueuesRepository.Repository) =>
  async function* ({
    pageNumber,
    pageSize
  }: ListQueuesRepository.DTO): AsyncGenerator<ListQueuesRepository.Result['entities'], any, void> {
    let pagination: Omit<ListQueuesRepository.Result, 'entities'> = {
      pageNumber,
      pageSize,
      pageCount: 0
    }

    do {
      const result = await listQueues.list(pagination)

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
