import { Selector } from '@ngxs/store';
import { NgxsDatasetState, NgxsDatasetStateModel } from './ngxs-dataset.state';

export class NgxsDatasetSelectors {
  @Selector([NgxsDatasetState])
  static getDatasets(state: NgxsDatasetStateModel) {
    return state.datasets;
  }

  @Selector([NgxsDatasetState])
  static isLoading(state: NgxsDatasetStateModel) {
    return state.isLoading;
  }

  @Selector([NgxsDatasetState])
  static getError(state: NgxsDatasetStateModel) {
    return state.error;
  }
}
