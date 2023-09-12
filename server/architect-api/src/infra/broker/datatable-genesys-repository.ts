import { CreateDataTableRowRepository } from '@/app/contracts'

import { PlatformClient } from './platform-client'

export class DataTableGenesysRepository implements CreateDataTableRowRepository.Repository {
  private readonly architectApi = new PlatformClient().getArchitectApi()

  async createRow(
    dto: CreateDataTableRowRepository.DTO
  ): Promise<CreateDataTableRowRepository.Result> {
    return (await this.architectApi.postFlowsDatatableRows(
      dto[0],
      dto
    )) as unknown as CreateDataTableRowRepository.Result
  }
}
