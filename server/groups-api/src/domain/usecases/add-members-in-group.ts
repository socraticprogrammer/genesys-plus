export interface AddMembersInGroup {
  add(params: AddMembersInGroup.Params): Promise<void>
}

export namespace AddMembersInGroup {
  export type AddMembersInGroupDTO = {
    groupId: string
    memberIds: string[]
  }

  export type Params = AddMembersInGroupDTO
}
