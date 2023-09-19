import { AddMembersInGroup } from '@/domain/usecases'
import { PlatformClient } from '@/infra/broker'

import { AddMembersInGroupRepository, GetGroupRepository } from '../contracts'
import { chunk } from './helpers'

export class BrokerAddMembersInGroup implements AddMembersInGroup {
  private readonly GROUP_MEMBERS_DIVISOR = 50

  constructor(
    private readonly platformClient: PlatformClient,
    private readonly groupRepository: AddMembersInGroupRepository.Repository &
      GetGroupRepository.Repository
  ) {}

  async add({ groupId, memberIds }: AddMembersInGroup.Params): Promise<void> {
    await this.platformClient.setup()

    const membersWithDivisor = chunk(memberIds, this.GROUP_MEMBERS_DIVISOR)

    for (const membersSlot of membersWithDivisor) {
      const group = await this.groupRepository.get({ groupId })
      if (group?.version === undefined || group?.version === null) continue
      await this.groupRepository.addMembers({
        groupId,
        version: group.version,
        memberIds: membersSlot
      })
    }
  }
}
