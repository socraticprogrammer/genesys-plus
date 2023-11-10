import { BrokerDeleteQueues } from '@/app/services'

import { makePlatformClient, makeQueueGenesysRepository } from '../broker'

export const makeDeleteQueues = () =>
  new BrokerDeleteQueues(makePlatformClient(), makeQueueGenesysRepository())
