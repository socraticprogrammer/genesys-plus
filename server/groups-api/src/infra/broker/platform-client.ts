import platformClient, { ApiClientClass,GroupsApi } from 'purecloud-platform-client-v2'

import { env } from '@/main/config/env'

export class PlatformClient {
  private readonly CLIENT_ID = env.GENESYS_CLIENT_ID
  private readonly CLIENT_SECRET = env.GENESYS_CLIENT_SECRET
  private readonly REGION = env.GENESYS_REGION
  private instance: ApiClientClass | undefined
  private groupsApi: GroupsApi | undefined

  async setup(): Promise<void> {
    this.instance = platformClient.ApiClient.instance
    this.instance.setEnvironment(this.REGION)
    this.groupsApi = new platformClient.GroupsApi()
    await this.instance.loginClientCredentialsGrant(this.CLIENT_ID, this.CLIENT_SECRET)
  }

  getGroupsApi(): GroupsApi {
    if (!this.groupsApi) {
      this.groupsApi = new platformClient.GroupsApi()
    }

    return this.groupsApi as GroupsApi
  }

  setAccessToken(accessToken: string): void {
    this.instance?.setAccessToken(accessToken)
  }
}
