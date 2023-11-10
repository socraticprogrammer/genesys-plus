import { DeleteQueueController } from '@/presentation/controllers'

import { makeDeleteQueuesRequestAdapter } from '../adapters'
import { makeDeleteQueues } from '../usecases'
import { makeCreateQueuesValidation } from '../validations'

export const makeDeleteQueuesController = () =>
  new DeleteQueueController(
    makeCreateQueuesValidation(),
    makeDeleteQueuesRequestAdapter(),
    makeDeleteQueues()
  )
