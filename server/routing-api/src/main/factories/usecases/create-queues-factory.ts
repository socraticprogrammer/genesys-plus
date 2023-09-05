import { BrokerCreateQueues } from '@/app/services'

import { makeQueueGenesysRepository } from '../broker'

export const makeCreateQueues = () => new BrokerCreateQueues(makeQueueGenesysRepository())
