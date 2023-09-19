import { BrokerListGroups } from '@/app/services'

import { makeGroupGenesysRepository, makePlatformClient } from '../broker'

export const makeListGroups = () =>
  new BrokerListGroups(makePlatformClient(), makeGroupGenesysRepository())
