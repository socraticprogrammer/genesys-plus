import platformClient, { ApiClientClass, RoutingApi } from 'purecloud-platform-client-v2'

export class PlatformClient {
  private readonly CLIENT_ID = ''
  private readonly CLIENT_SECRET = ''
  private instance: ApiClientClass | undefined
  private routingApi: RoutingApi | undefined

  async setup(): Promise<void> {
    this.instance = platformClient.ApiClient.instance
    this.instance.setEnvironment('us-east-1')
    this.routingApi = new platformClient.RoutingApi()
    await this.instance.loginClientCredentialsGrant(this.CLIENT_ID, this.CLIENT_SECRET)
  }

  getRoutingApi(): RoutingApi {
    if (!this.routingApi) {
      this.routingApi = new platformClient.RoutingApi()
    }

    return this.routingApi as RoutingApi
  }

  setAccessToken(accessToken: string): void {
    this.instance?.setAccessToken(accessToken)
  }
}
