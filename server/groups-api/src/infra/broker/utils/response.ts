import { ListGroupsRepository } from '@/app/contracts'

export const formatListGroupsResponse = (
  groups: ListGroupsRepository.Result['entities']
): ListGroupsRepository.Result['entities'] => groups.map(({ id, name, description, dateModified, memberCount, state, version, type, rulesVisible, visibility }) => ({  id, name, description, dateModified, memberCount, state, version, type, rulesVisible, visibility }))
