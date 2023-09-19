import { Router } from 'express'
import multer from 'multer'

import {
  makeCreateQueuesRoute,
  makeListQueuesRoute,
  makeUpdateQueuesRoute
} from '../factories/routes'

const upload = multer()

export default (router: Router): void => {
  router.post('/queues', upload.single('file'), makeCreateQueuesRoute())
  router.put('/queues', upload.single('file'), makeUpdateQueuesRoute())
  router.get('/queues', makeListQueuesRoute())
  router.get('/queues/export', makeListQueuesRoute(true))
}
