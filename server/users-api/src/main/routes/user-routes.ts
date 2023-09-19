import { Router } from 'express'

import { makeListUsersRoute } from '../factories/routes'

export default (router: Router): void => {
  router.get('/users', makeListUsersRoute())
  router.get('/users/export', makeListUsersRoute(true))
}
