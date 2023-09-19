import { BrokerUpdateQueues } from '@/app/services'

import { makePlatformClient, makeQueueGenesysRepository } from '../broker'

export const makeUpdateQueues = () =>
  new BrokerUpdateQueues(makePlatformClient(), makeQueueGenesysRepository())
