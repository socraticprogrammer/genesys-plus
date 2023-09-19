import { Router } from 'express'
import multer from 'multer'

import { makeCreateQueuesRoute, makeListQueuesRoute } from '../factories/routes'

const upload = multer()

export default (router: Router): void => {
  router.post('/queues', upload.single('file'), makeCreateQueuesRoute())
  router.get('/queues', makeListQueuesRoute())
}
