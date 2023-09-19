import { ListQueueController } from '@/presentation/controllers'

import { makeListQueues } from '../usecases'

export const makeListQueuesController = () => new ListQueueController(makeListQueues())
