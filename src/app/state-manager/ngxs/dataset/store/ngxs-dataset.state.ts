import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';
import { NgxsGetDatasets } from './ngxs-dataset.actions';
import { DatasetApiService } from '../../../../common/api/services/dataset.api.service';
import { catchError, tap } from 'rxjs';

export interface NgxsDatasetStateModel {
  datasets: DatasetResponseDto[];
  isLoading: boolean;
  error: string | null;
}

@State<NgxsDatasetStateModel>({
  name: 'datasets',
  defaults: {
    datasets: [],
    isLoading: true,
    error: null,
  },
})
@Injectable()
export class NgxsDatasetState {
  constructor(private datasetApiService: DatasetApiService) {}

  @Action(NgxsGetDatasets)
  getDatasets(
    ctx: StateContext<NgxsDatasetStateModel>,
    action: NgxsGetDatasets
  ) {
    ctx.patchState({ isLoading: true, error: null });

    return this.datasetApiService.getDatasets().pipe(
      tap((datasets) => {
        ctx.patchState({
          datasets,
          isLoading: false,
          error: null,
        });
      }),
      catchError((error) => {
        ctx.patchState({
          isLoading: false,
          error: error.message || 'Error',
        });
        return error;
      })
    );
  }
}
