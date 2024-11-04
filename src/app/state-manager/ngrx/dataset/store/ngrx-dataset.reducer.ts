import { createReducer, on } from '@ngrx/store';

import { DatasetApiActions } from './ngrx-dataset.actions';
import { ngrxDatasetAdapter, initialDatasetState } from './ngrx-dataset.state';

export const ngrxDatasetReducer = createReducer(
  initialDatasetState,
  on(DatasetApiActions.loadDatasets, (state) =>
    ngrxDatasetAdapter.setAll([], {
      ...state,
      isLoading: true,
    })
  ),

  on(DatasetApiActions.getDatasets, (state, action) => 
    ngrxDatasetAdapter.setAll(action.datasets, {
      ...state,
      isLoading: false,
      error: null
    })
  ),
);
