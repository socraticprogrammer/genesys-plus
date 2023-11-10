import { Router } from 'express'
import multer from 'multer'

import {
  makeCreateQueuesRoute,
  makeDeleteQueuesRoute,
  makeListQueuesRoute,
  makeUpdateQueuesRoute
} from '../factories/routes'

const upload = multer()

export default (router: Router): void => {
  router.post('/queues', upload.single('file'), makeCreateQueuesRoute())
  router.put('/queues', upload.single('file'), makeUpdateQueuesRoute())
  router.put('/queues/delete', upload.single('file'), makeDeleteQueuesRoute())
  router.get('/queues', makeListQueuesRoute())
  router.get('/queues/export', makeListQueuesRoute(true))
}
