import { Router } from 'express'
import multer from 'multer'

import { makeAddMembersInGroupRoute, makeListGroupsRoute } from '../factories/routes'

const upload = multer()

export default (router: Router): void => {
  router.post('/groups/:groupId', upload.single('file'), makeAddMembersInGroupRoute())
  router.get('/groups', makeListGroupsRoute())
  router.get('/groups/export', makeListGroupsRoute(true))
}
