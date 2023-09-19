import { ListQueuesRepository } from '@/app/contracts'

export const formatListQueuesResponse = (
  queues: ListQueuesRepository.BrokerResult
): ListQueuesRepository.Result['entities'] =>
  queues.map(({ id, name, division }) => ({ id, name, divisionId: division?.id ?? '' }))
