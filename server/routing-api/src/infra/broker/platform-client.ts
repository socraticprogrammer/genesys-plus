import platformClient, { ApiClientClass, RoutingApi } from 'purecloud-platform-client-v2'

export class PlatformClient {
  private instance: ApiClientClass | undefined
  private routingApi: RoutingApi | undefined

  setup(): void {
    this.instance = platformClient.ApiClient.instance
    this.instance.setEnvironment('us-east-1')
    this.routingApi = new platformClient.RoutingApi()
  }

  getInstance(): ApiClientClass {
    if (!this.instance) {
      this.setup()
    }

    return this.instance as ApiClientClass
  }

  getRoutingApi(): RoutingApi {
    if (!this.routingApi) {
      this.setup()
    }

    return this.routingApi as RoutingApi
  }

  setAccessToken(accessToken: string): void {
    this.instance?.setAccessToken(accessToken)
  }
}
