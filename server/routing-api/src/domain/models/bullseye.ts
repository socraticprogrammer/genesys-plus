import { Division } from './division'
import { MemberGroup } from './member-group'

export interface Bullseye {
  rings?: Bullseye.Ring[]
}

export namespace Bullseye {
  export interface Ring {
    expansionCriteria?: ExpansionCriterium[]
    actions?: Actions
    memberGroups?: MemberGroup[]
  }

  export interface ExpansionCriterium {
    type?: string
    threshold?: number
  }

  export interface Actions {
    skillsToRemove?: SkillsToRemove[]
  }

  export interface SkillsToRemove {
    name?: string
    id?: string
    selfUri?: string
  }
}
