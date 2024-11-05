import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgrxDatasetState } from './ngrx-dataset.state';
import { DatasetApiActions } from './ngrx-dataset.actions';
import { ngrxDataset, ngrxLoading } from './ngrx-dataset.selectors';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';

@Injectable({ providedIn: 'root' })
export class NgrxDatasetStoreService {
  ngrxDatasets$: Observable<DatasetResponseDto[]>;
  loading$: Observable<boolean> = this.store.pipe(select(ngrxLoading));

  constructor(private readonly store: Store<NgrxDatasetState>) {
    this.ngrxDatasets$ = this.store.pipe(select(ngrxDataset));
  }

  getDatasets(): void {
    this.store.dispatch(DatasetApiActions.loadDatasets());
  }
}
