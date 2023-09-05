export namespace ClientCredentialsAuthRepository {
  export interface DTO {
    clientId: string
    clientSecret: string
  }

  export interface Result {
    accessToken: string
  }

  export interface Repository {
    authenticate(dto: DTO): Promise<Result>
  }
}
