import { Router } from 'express'

import { makeCreateQueuesRoute } from '../factories/routes/create-queues-route-factory'

export default (router: Router): void => {
  router.post('/queues', makeCreateQueuesRoute())
}
