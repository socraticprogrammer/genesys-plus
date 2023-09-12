import platformClient, { ApiClientClass, ArchitectApi } from 'purecloud-platform-client-v2'

import { env } from '@/main/config/env'

export class PlatformClient {
  private readonly CLIENT_ID = env.GENESYS_CLIENT_ID
  private readonly CLIENT_SECRET = env.GENESYS_CLIENT_SECRET
  private readonly REGION = env.GENESYS_REGION
  private instance: ApiClientClass | undefined
  private architectApi: ArchitectApi | undefined

  async setup(): Promise<void> {
    this.instance = platformClient.ApiClient.instance
    this.instance.setEnvironment(this.REGION)
    this.architectApi = new platformClient.ArchitectApi()
    await this.instance.loginClientCredentialsGrant(this.CLIENT_ID, this.CLIENT_SECRET)
  }

  getArchitectApi(): ArchitectApi {
    if (!this.architectApi) {
      this.architectApi = new platformClient.ArchitectApi()
    }

    return this.architectApi as ArchitectApi
  }

  setAccessToken(accessToken: string): void {
    this.instance?.setAccessToken(accessToken)
  }
}
