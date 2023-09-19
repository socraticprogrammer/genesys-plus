import platformClient, { ApiClientClass, UsersApi } from 'purecloud-platform-client-v2'

import { env } from '@/main/config/env'

export class PlatformClient {
  private readonly CLIENT_ID = env.GENESYS_CLIENT_ID
  private readonly CLIENT_SECRET = env.GENESYS_CLIENT_SECRET
  private readonly REGION = env.GENESYS_REGION
  private instance: ApiClientClass | undefined
  private usersApi: UsersApi | undefined

  async setup(): Promise<void> {
    this.instance = platformClient.ApiClient.instance
    this.instance.setEnvironment(this.REGION)
    this.usersApi = new platformClient.UsersApi()
    await this.instance.loginClientCredentialsGrant(this.CLIENT_ID, this.CLIENT_SECRET)
  }

  getUsersApi(): UsersApi {
    if (!this.usersApi) {
      this.usersApi = new platformClient.UsersApi()
    }

    return this.usersApi as UsersApi
  }

  setAccessToken(accessToken: string): void {
    this.instance?.setAccessToken(accessToken)
  }
}
