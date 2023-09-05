import { AddressableEntityRef } from './addressable-entity-ref'

export interface DirectRouting {
  callMediaSettings?: DirectRouting.DirectRoutingCallMediaSettings
  emailMediaSettings?: DirectRouting.DirectRoutingMediaSettings
  messageMediaSettings?: DirectRouting.DirectRoutingMediaSettings
  backupQueueId?: string
  waitForAgent?: boolean
  agentWaitSeconds?: number
}

export namespace DirectRouting {
  export interface DirectRoutingCallMediaSettings {
    enabled?: boolean
    inboundFlow?: AddressableEntityRef
    voicemailFlow?: AddressableEntityRef
  }

  export interface DirectRoutingMediaSettings {
    enabled?: boolean
    inboundFlow?: AddressableEntityRef
  }
}
