import {
  AddMembersInGroupRepository,
  GetGroupRepository,
  ListGroupsRepository
} from '@/app/contracts'
import { Group } from '@/domain/models'

import { PlatformClient } from './platform-client'
import { formatListGroupsResponse } from './utils'

export class GroupGenesysRepository
  implements
    AddMembersInGroupRepository.Repository,
    ListGroupsRepository.Repository,
    GetGroupRepository.Repository
{
  private readonly groupsApi = new PlatformClient().getGroupsApi()

  async addMembers({
    groupId,
    ...body
  }: AddMembersInGroupRepository.DTO): Promise<AddMembersInGroupRepository.Result> {
    try {
      const group = await this.groupsApi.postGroupMembers(groupId, body)
      return group
    } catch (error) {
      console.error(error)
    }
  }

  async get({ groupId }: GetGroupRepository.DTO): Promise<GetGroupRepository.Result> {
    const group = await this.groupsApi.getGroup(groupId)
    if (!group) return undefined
    return group
  }

  async list({
    pageNumber,
    pageSize
  }: ListGroupsRepository.DTO): Promise<ListGroupsRepository.Result> {
    const result = await this.groupsApi.getGroups({
      pageNumber,
      pageSize
    })

    return {
      entities: result?.entities?.length ? formatListGroupsResponse(result.entities) : [],
      pageCount: result?.pageCount ?? 0,
      pageNumber: result?.pageNumber ?? 0,
      pageSize: result?.pageSize ?? 0
    }
  }
}
