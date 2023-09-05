import { CreateQueueController } from '@/presentation/controllers'

import { makeCreateQueuesRequestAdapter } from '../adapters'
import { makeCreateQueues } from '../usecases'
import { makeCreateQueuesValidation } from '../validations'

export const makeCreateQueuesController = () =>
  new CreateQueueController(
    makeCreateQueuesValidation(),
    makeCreateQueuesRequestAdapter(),
    makeCreateQueues()
  )
