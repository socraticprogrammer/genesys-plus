import { Router } from 'express'

import { makeListUsersRoute, makeListUsersWithFilterByEmailRoute } from '../factories/routes'

export default (router: Router): void => {
  router.get('/users', makeListUsersRoute())
  router.get('/users/export', makeListUsersRoute(true))
  router.post('/users/filters/email', makeListUsersWithFilterByEmailRoute())
  router.post('/users/filters/email/export', makeListUsersWithFilterByEmailRoute(true))
}
