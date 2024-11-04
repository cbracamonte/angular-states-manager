import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  NgrxDatasetState,
  NGRX_DATASET_FEATURE_KEY,
  ngrxDatasetIsLoading,
  selectAll,
  ngrxDatasetError,
} from './ngrx-dataset.state';

const ngrxDatasetSelector = createFeatureSelector<NgrxDatasetState>(
  NGRX_DATASET_FEATURE_KEY
);

export const ngrxIsLoadingSelector = createSelector(
  ngrxDatasetSelector,
  ngrxDatasetIsLoading
);

export const ngrxDataset = createSelector(ngrxDatasetSelector, selectAll);

export const ngrxErrorSelector = createSelector(ngrxDatasetSelector, ngrxDatasetError);
