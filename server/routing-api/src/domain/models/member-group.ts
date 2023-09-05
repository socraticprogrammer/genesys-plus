import { Division } from './division'

export interface MemberGroup {
  id?: string
  name?: string
  division?: Division
  type?: string
  memberCount?: number
  selfUri?: string
}
