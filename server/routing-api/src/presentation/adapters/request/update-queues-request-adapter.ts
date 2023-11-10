import { ConvertBufferToWorkbook, ConvertWorkbookToJson } from '@/app/contracts'
import { RequestAdapter } from '@/app/contracts/adapters'
import { UpdateQueues } from '@/domain/usecases'
import { pipe } from '@/shared/operators'

export class UpdateQueuesRequestAdapter implements RequestAdapter<UpdateQueues.Params> {
  constructor(private readonly sheetClient: ConvertBufferToWorkbook & ConvertWorkbookToJson) {}

  async adapt(params: UpdateQueuesRequestAdapter.Request): Promise<UpdateQueues.Params> {
    const queues = pipe(
      this.sheetClient.convertBufferToWorkbook,
      this.sheetClient.convertWorkbookToJson
    )(params.file.buffer) as UpdateQueuesRequestAdapter.FileObject[]

    return queues.map(
      ({
        id,
        name,
        divisionId,
        description,
        mediaSettingsCallEnableAutoAnswer,
        mediaSettingsCallAlertingTimeoutSeconds,
        mediaSettingsCallServiceLevelPercentage,
        mediaSettingsCallServiceLevelDurationMs,
        mediaSettingsCallbackEnableAutoAnswer,
        mediaSettingsCallbackAlertingTimeoutSeconds,
        mediaSettingsCallbackServiceLevelPercentage,
        mediaSettingsCallbackServiceLevelDurationMs,
        mediaSettingsChatEnableAutoAnswer,
        mediaSettingsChatAlertingTimeoutSeconds,
        mediaSettingsChatServiceLevelPercentage,
        mediaSettingsChatServiceLevelDurationMs,
        mediaSettingsEmailEnableAutoAnswer,
        mediaSettingsEmailAlertingTimeoutSeconds,
        mediaSettingsEmailServiceLevelPercentage,
        mediaSettingsEmailServiceLevelDurationMs,
        mediaSettingsMessageEnableAutoAnswer,
        mediaSettingsMessageAlertingTimeoutSeconds,
        mediaSettingsMessageServiceLevelPercentage,
        mediaSettingsMessageServiceLevelDurationMs,
        scoringMethod,
        acwSettingsWrapupPrompt,
        acwSettingsTimeoutMs,
        skillEvaluationMethod,
        queueFlowId,
        emailInQueueFlow,
        messageInQueueFlow,
        whisperPromptId,
        onHoldPromptId,
        autoAnswerOnly,
        enableTranscription,
        enableManualAssignment,
        agentOwnedRoutingEnableAgentOwnedCallbacks,
        agentOwnedRoutingMaxOwnedCallbackHours,
        agentOwnedRoutingMaxOwnedCallbackDelayHours,
        callingPartyName,
        callingPartyNumber,
        voiceDefaultScriptId,
        emailDefaultScriptId,
        chatDefaultScriptId,
        messageDefaultScriptId,
        callbackDefaultScriptId,
        peerId,
        suppressInQueueCallRecording,
        sourceQueueId
      }) => {
        return {
          id: id?.trim(),
          name: name?.trim(),
          enableManualAssignment:
            enableManualAssignment !== undefined ? enableManualAssignment : false,
          ...(divisionId
            ? {
                division: {
                  id: divisionId.trim()
                }
              }
            : {}),
          ...(description
            ? {
                description: description.trim()
              }
            : {}),
          ...(peerId
            ? {
                peerId: peerId.trim()
              }
            : {}),
          ...(sourceQueueId
            ? {
                sourceQueueId: sourceQueueId.trim()
              }
            : {}),
          ...(messageInQueueFlow
            ? {
                messageInQueueFlow: {
                  id: messageInQueueFlow.trim()
                }
              }
            : {}),
          ...(messageDefaultScriptId
            ? {
                defaultScripts: {
                  message: {
                    id: messageDefaultScriptId.trim()
                  }
                }
              }
            : {})
        }
      }
    )
  }
}

export namespace UpdateQueuesRequestAdapter {
  export interface Request {
    file: {
      buffer: Buffer
    }
  }

  export interface FileObject {
    id: string
    name: string
    divisionId: string
    description: string
    mediaSettingsCallEnableAutoAnswer: string
    mediaSettingsCallAlertingTimeoutSeconds: string
    mediaSettingsCallServiceLevelPercentage: string
    mediaSettingsCallServiceLevelDurationMs: string
    mediaSettingsCallbackEnableAutoAnswer: string
    mediaSettingsCallbackAlertingTimeoutSeconds: string
    mediaSettingsCallbackServiceLevelPercentage: string
    mediaSettingsCallbackServiceLevelDurationMs: string
    mediaSettingsChatEnableAutoAnswer: string
    mediaSettingsChatAlertingTimeoutSeconds: string
    mediaSettingsChatServiceLevelPercentage: string
    mediaSettingsChatServiceLevelDurationMs: string
    mediaSettingsEmailEnableAutoAnswer: string
    mediaSettingsEmailAlertingTimeoutSeconds: string
    mediaSettingsEmailServiceLevelPercentage: string
    mediaSettingsEmailServiceLevelDurationMs: string
    mediaSettingsMessageEnableAutoAnswer: string
    mediaSettingsMessageAlertingTimeoutSeconds: string
    mediaSettingsMessageServiceLevelPercentage: string
    mediaSettingsMessageServiceLevelDurationMs: string
    scoringMethod: string
    acwSettingsWrapupPrompt: string
    acwSettingsTimeoutMs: string
    skillEvaluationMethod: string
    queueFlowId: string
    emailInQueueFlow: string
    messageInQueueFlow: string
    whisperPromptId: string
    onHoldPromptId: string
    autoAnswerOnly: string
    enableTranscription: string
    enableManualAssignment: boolean | undefined
    agentOwnedRoutingEnableAgentOwnedCallbacks: string
    agentOwnedRoutingMaxOwnedCallbackHours: string
    agentOwnedRoutingMaxOwnedCallbackDelayHours: string
    callingPartyName: string
    callingPartyNumber: string
    voiceDefaultScriptId: string
    emailDefaultScriptId: string
    chatDefaultScriptId: string
    messageDefaultScriptId: string
    callbackDefaultScriptId: string
    peerId: string
    suppressInQueueCallRecording: string
    sourceQueueId: string
  }
}
