import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';
import { NgxsGetDatasets } from './ngxs-dataset.actions';
import { DatasetApiService } from '../../../../common/api/services/dataset.api.service';
import { tap } from 'rxjs';

export interface NgxsDatasetStateModel {
  datasets: DatasetResponseDto[];
}

@State<NgxsDatasetStateModel>({
  name: 'datasets',
  defaults: {
    datasets: [],
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
    return this.datasetApiService.getDatasets().pipe(
      tap((datasets) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          datasets,
        });
      })
    );
  }
}
