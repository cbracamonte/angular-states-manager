import { Selector } from '@ngxs/store';
import { NgxsDatasetState, NgxsDatasetStateModel } from './ngxs-dataset.state';

export class NgxsDatasetSelectors {
  @Selector([NgxsDatasetState])
  static getDatasets(state: NgxsDatasetStateModel) {
    return state.datasets;
  }
}
