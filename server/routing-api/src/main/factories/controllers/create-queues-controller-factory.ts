import { CreateQueueController } from '@/presentation/controllers'

import { makeCreateQueues } from '../usecases'
import { makeCreateQueuesValidation } from '../validations'

export const makeCreateQueuesController = () =>
  new CreateQueueController(makeCreateQueuesValidation(), makeCreateQueues())
