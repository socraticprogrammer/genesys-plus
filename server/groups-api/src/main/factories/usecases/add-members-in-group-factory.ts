import { BrokerAddMembersInGroup } from '@/app/services'

import { makeGroupGenesysRepository, makePlatformClient } from '../broker'

export const makeAddMembersInGroup = () =>
  new BrokerAddMembersInGroup(makePlatformClient(), makeGroupGenesysRepository())
