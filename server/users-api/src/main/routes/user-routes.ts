import { Router } from 'express'
import multer from 'multer'

import { makeListUsersRoute, makeListUsersWithFilterByEmailRoute } from '../factories/routes'

const upload = multer()

export default (router: Router): void => {
  router.get('/users', makeListUsersRoute())
  router.get('/users/export', makeListUsersRoute(true))
  router.post('/users/filters/email', upload.single('file'), makeListUsersWithFilterByEmailRoute())
}
