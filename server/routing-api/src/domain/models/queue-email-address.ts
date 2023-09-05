import { DomainEntityRef } from './domain-entity-ref'

export interface QueueEmailAddress {
  domain?: DomainEntityRef
  route?: InboundRoute
}

export interface InboundRoute {
  id?: string
  name?: string
  pattern: string
  queue?: DomainEntityRef
  priority?: number
  skills?: DomainEntityRef[]
  language?: DomainEntityRef
  fromName: string
  fromEmail?: string
  flow?: DomainEntityRef
  replyEmailAddress?: QueueEmailAddress
  autoBcc?: InboundRoute.EmailAddress[]
  spamFlow?: DomainEntityRef
  signature?: InboundRoute.Signature
  historyInclusion?: string
  allowMultipleActions?: boolean
  selfUri?: string
}

export namespace InboundRoute {
  export interface EmailAddress {
    email?: string
    name?: string
  }

  export interface Signature {
    enabled?: boolean
    cannedResponseId?: string
    alwaysIncluded?: boolean
    inclusionType?: string
  }
}
