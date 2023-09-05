export interface MediaSettings {
  enableAutoAnswer?: boolean
  alertingTimeoutSeconds?: number
  serviceLevel?: MediaSettings.ServiceLevel
  subTypeSettings?: { [key: string]: MediaSettings.BaseMediaSettings }
}

export namespace MediaSettings {
  export interface ServiceLevel {
    percentage?: number
    durationMs?: number
  }

  export interface BaseMediaSettings {
    enableAutoAnswer?: boolean
  }
}
