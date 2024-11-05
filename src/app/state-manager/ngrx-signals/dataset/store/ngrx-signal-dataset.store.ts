import { computed, inject } from '@angular/core';
import {
  signalStore,
  withState,
  patchState,
  withMethods,
  withHooks,
  withComputed,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DatasetApiService } from '../../../../common/api/services/dataset.api.service';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';
import { catchError, map, of, pipe, switchMap, tap } from 'rxjs';
import { DatasetMapper } from '../../../../common/api/mappers/dataset.mapper';

export const NgrxSignalDatasetStore = signalStore(
  { providedIn: 'root' },
  withState({
    datasets: [] as DatasetMapper[],
    isLoading: false,
    error: null as Error | null,
  }),
  withMethods((store) => ({
    getDatasets: rxMethod<DatasetMapper[]>(
      pipe(
        switchMap(() => {
          patchState(store, { isLoading: true });
          return inject(DatasetApiService)
            .getDatasets()
            .pipe(
              map(mapperDataset),
              tap((datasets) =>
                patchState(store, { datasets, isLoading: false })
              ),
              catchError((error) => {
                patchState(store, { error, isLoading: false });
                return error;
              })
            );
        })
      )
    ),
  })),
  withHooks({
    onInit: ({ getDatasets }) => {
      getDatasets(of([] as DatasetResponseDto[]));
    },
  })
);

function mapperDataset(dataset: DatasetResponseDto[]): DatasetMapper[] {
  return dataset.map((dataset) => ({
    body: dataset.body,
    title: dataset.title,
  }));
}
