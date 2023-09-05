import { Division } from './division'

export interface Script {
  id?: string
  name?: string
  division?: Division
  versionId?: string
  createdDate?: string
  modifiedDate?: string
  publishedDate?: string
  versionDate?: string
  startPageId?: string
  startPageName?: string
  features?: object
  variables?: object
  customActions?: object
  pages?: Script.Page[]
  selfUri?: string
}

export namespace Script {
  export interface Page {
    id?: string
    name?: string
    versionId?: string
    createdDate?: string
    modifiedDate?: string
    rootContainer?: { [key: string]: object }
    properties?: { [key: string]: object }
    selfUri?: string
  }
}
