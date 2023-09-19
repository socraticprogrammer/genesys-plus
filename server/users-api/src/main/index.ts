import 'dotenv/config'

import { setupApp } from './config/app'
import { env } from './config/env'

const app = setupApp()

app.listen(env.PORT, () => {
  console.info('Server is running!')
})
