import { CreateDataTableRowRepository } from '@/app/contracts'

import { PlatformClient } from './platform-client'

export class DataTableGenesysRepository implements CreateDataTableRowRepository.Repository {
  private readonly architectApi = new PlatformClient().getArchitectApi()

  async createRow({
    row,
    datatableId
  }: CreateDataTableRowRepository.DTO): Promise<CreateDataTableRowRepository.Result> {
    return (await this.architectApi.postFlowsDatatableRows(
      datatableId,
      row
    )) as unknown as CreateDataTableRowRepository.Result
  }
}
