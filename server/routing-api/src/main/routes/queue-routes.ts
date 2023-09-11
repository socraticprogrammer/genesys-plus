import { Router } from 'express'
import multer from 'multer'

import { makeCreateQueuesRoute } from '../factories/routes/create-queues-route-factory'

const upload = multer()

export default (router: Router): void => {
  router.post('/queues', upload.single('file'), makeCreateQueuesRoute())
}
