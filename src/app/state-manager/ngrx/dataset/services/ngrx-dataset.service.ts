import { Injectable } from '@angular/core';
import { NgrxDatasetStoreService } from '../store/ngrx-dataset-store.service';
import { map, Observable } from 'rxjs';
import { DatasetMapper } from '../../../../common/api/mappers/dataset.mapper';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';

@Injectable({
  providedIn: 'root',
})
export class NgrxDatasetService {
  loading$: Observable<boolean> = this.ngrxDatasetStoreService.loading$;
  constructor(
    private readonly ngrxDatasetStoreService: NgrxDatasetStoreService
  ) {
    this.ngrxDatasetStoreService.getDatasets();
  }

  getDatasets(): Observable<DatasetMapper[]> {
    return this.ngrxDatasetStoreService.ngrxDatasets$.pipe(
      map(this.mapperDataset)
    );
  }

  private mapperDataset(dataset: DatasetResponseDto[]): DatasetMapper[] {
    return dataset.map((dataset) => ({
      body: dataset.body,
      title: dataset.title,
    }));
  }
}
