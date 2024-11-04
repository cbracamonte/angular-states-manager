import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';

export const NGRX_DATASET_FEATURE_KEY = 'ngrx-dataset';

export interface NgrxDatasetState extends EntityState<DatasetResponseDto> {
  isLoading: boolean;
  error: string | null;
}

export const ngrxDatasetAdapter: EntityAdapter<DatasetResponseDto> =
  createEntityAdapter<DatasetResponseDto>({
    selectId: (dataset) => dataset.id,
  });

export const initialDatasetState: NgrxDatasetState =
  ngrxDatasetAdapter.getInitialState({ isLoading: false, error: null });

export const { selectIds, selectEntities, selectAll, selectTotal } =
  ngrxDatasetAdapter.getSelectors();

export const ngrxDatasetIsLoading = (state: NgrxDatasetState) =>
  state.isLoading;
export const ngrxDatasetError = (state: NgrxDatasetState) => state.error;
