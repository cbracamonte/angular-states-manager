import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DatasetMapper } from '../../../../common/api/mappers/dataset.mapper';
import { NgxsDatasetSelectors } from './ngxs-dataset.selectors';
import { NgxsGetDatasets } from './ngxs-dataset.actions';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';

@Injectable({
  providedIn: 'root',
})
export class NgxsDatasetStoreService {
  ngxsDataset$: Observable<DatasetResponseDto[]> = this.store.select(
    NgxsDatasetSelectors.getDatasets
  );

  isLoading$: Observable<boolean> = this.store.select(
    NgxsDatasetSelectors.isLoading
  );

  constructor(private store: Store) {}

  getDatasets(): void {
    this.store.dispatch(new NgxsGetDatasets());
  }
}
