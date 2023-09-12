export class ServerError extends Error {
  constructor(stack: string) {
    super('Internal server error')
    this.name = 'SERVER_ERROR'
    this.stack = stack
  }
}
