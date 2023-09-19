import { UpdateQueueController } from '@/presentation/controllers'

import { makeUpdateQueuesRequestAdapter } from '../adapters'
import { makeUpdateQueues } from '../usecases'
import { makeCreateQueuesValidation } from '../validations'

export const makeUpdateQueuesController = () =>
  new UpdateQueueController(
    makeCreateQueuesValidation(),
    makeUpdateQueuesRequestAdapter(),
    makeUpdateQueues()
  )
