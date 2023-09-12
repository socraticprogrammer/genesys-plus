import { Router } from 'express'
import multer from 'multer'

import { makeCreateDataTableRowsRoute } from '../factories/routes/create-datatable-rows-route-factory'

const upload = multer()

export default (router: Router): void => {
  router.post(
    '/datatables/:datatableId/rows',
    upload.single('file'),
    makeCreateDataTableRowsRoute()
  )
}
