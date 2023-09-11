import { BrokerCreateQueues } from '@/app/services'

import { makePlatformClient, makeQueueGenesysRepository } from '../broker'

export const makeCreateQueues = () =>
  new BrokerCreateQueues(makePlatformClient(), makeQueueGenesysRepository())
