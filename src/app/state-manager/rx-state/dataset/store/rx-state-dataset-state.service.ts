import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { catchError, finalize, Observable, tap } from 'rxjs';
import { RxStateDatasetState } from './rx-state-dataset.state';
import { DatasetApiService } from '../../../../common/api/services/dataset.api.service';

@Injectable()
export class RxStateDatasetStateService {
  rxStateDatasetState$ = this.state.select();

  constructor(
    private state: RxState<RxStateDatasetState>,
    private datasetApiService: DatasetApiService
  ) {
    this.state.set({
      datasets: [],
      dataset: null,
      loading: false,
      error: null,
    });
  }

  getDatasets(): void {
    this.state.set({ loading: true });
    this.datasetApiService
      .getDatasets()
      .pipe(
        tap((datasets) => this.state.set({ datasets })),
        catchError((error) => {
          this.state.set({ error });
          return error;
        }),
        finalize(() => this.state.set({ loading: false }))
      )
      .subscribe();
  }

  getDataset(id: number): void {
    this.state.set({ loading: true });
    this.datasetApiService
      .getDataset(id)
      .pipe(
        tap((dataset) => this.state.set({ dataset })),
        catchError((error) => {
          this.state.set({ error });
          return error;
        }),
        finalize(() => this.state.set({ loading: false }))
      )
      .subscribe();
  }

  get datasets$(): Observable<RxStateDatasetState['datasets']> {
    return this.state.select('datasets');
  }

  get dataset$(): Observable<RxStateDatasetState['dataset']> {
    return this.state.select('dataset');
  }

  get loading$(): Observable<RxStateDatasetState['loading']> {
    return this.state.select('loading');
  }
}
