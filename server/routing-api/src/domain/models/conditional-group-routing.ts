import { DomainEntityRef } from './domain-entity-ref'

export interface ConditionalGroupRouting {
  rules?: ConditionalGroupRouting.ConditionalGroupRoutingRule[]
}

export namespace ConditionalGroupRouting {
  export interface ConditionalGroupRoutingRule {
    queue?: DomainEntityRef
    metric?: string
    operator?: string
    conditionValue?: number
    groups?: MemberGroup[]
    waitSeconds?: number
  }

  export interface MemberGroup {}
}
