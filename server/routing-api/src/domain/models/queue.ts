import { Bullseye } from './bullseye'
import { ConditionalGroupRouting } from './conditional-group-routing'
import { DirectRouting } from './direct-routing'
import { Division } from './division'
import { DomainEntityRef } from './domain-entity-ref'
import { MediaSettings } from './media-settings'
import { MemberGroup } from './member-group'
import { QueueEmailAddress } from './queue-email-address'
import { Script } from './script'

export interface Queue {
  id?: string
  name?: string
  division?: Division
  description?: string
  dateCreated?: string
  dateModified?: string
  modifiedBy?: string
  createdBy?: string
  memberCount?: number
  userMemberCount?: number
  joinedMemberCount?: number
  mediaSettings?: Queue.QueueMediaSettings
  routingRules?: Queue.RoutingRule[]
  conditionalGroupRouting?: ConditionalGroupRouting
  bullseye?: Bullseye
  acwSettings?: Queue.AcwSettings
  skillEvaluationMethod?: string
  memberGroups?: MemberGroup[]
  queueFlow?: DomainEntityRef
  emailInQueueFlow?: DomainEntityRef
  messageInQueueFlow?: DomainEntityRef
  whisperPrompt?: DomainEntityRef
  onHoldPrompt?: DomainEntityRef
  autoAnswerOnly?: boolean
  enableTranscription?: boolean
  enableManualAssignment?: boolean
  agentOwnedRouting?: Queue.AgentOwnedRouting
  directRouting?: DirectRouting
  callingPartyName?: string
  callingPartyNumber?: string
  defaultScripts?: { [key: string]: Script }
  outboundMessagingAddresses?: Queue.QueueMessagingAddresses
  outboundEmailAddress?: QueueEmailAddress
  peerId?: string
  suppressInQueueCallRecording?: boolean
  selfUri?: string
}

export namespace Queue {
  export interface QueueMediaSettings {
    call?: MediaSettings
    callback?: MediaSettings
    chat?: MediaSettings
    email?: MediaSettings
    message?: MediaSettings
  }

  export interface RoutingRule {
    operator?: string
    threshold?: number
    waitSeconds?: number
  }

  export interface AcwSettings {
    wrapupPrompt?: string
    timeoutMs?: number
  }

  export interface AgentOwnedRouting {
    enableAgentOwnedCallbacks?: boolean
    maxOwnedCallbackHours?: number
    maxOwnedCallbackDelayHours?: number
  }

  export interface QueueMessagingAddresses {
    smsAddress?: DomainEntityRef
    openMessagingRecipient?: DomainEntityRef
    whatsAppRecipient?: DomainEntityRef
  }
}
