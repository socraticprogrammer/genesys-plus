export interface RequestAdapter<T> {
  adapt(params: any): Promise<T>
}
