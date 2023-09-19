import { ListQueuesRepository } from '@/app/contracts'

export const formatListQueuesResponse = (
  queues: ListQueuesRepository.Result['entities']
): ListQueuesRepository.Result['entities'] => queues.map(({ id, name }) => ({ id, name }))
