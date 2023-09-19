import { BrokerListQueues } from '@/app/services'

import { makePlatformClient, makeQueueGenesysRepository } from '../broker'

export const makeListQueues = () =>
  new BrokerListQueues(makePlatformClient(), makeQueueGenesysRepository())
