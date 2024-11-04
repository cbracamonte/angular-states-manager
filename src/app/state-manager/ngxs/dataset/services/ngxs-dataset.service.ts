import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DatasetMapper } from '../../../../common/api/mappers/dataset.mapper';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';
import { NgxsDatasetStoreService } from '../store/ngxs-dataset-store.service';

@Injectable({
  providedIn: 'root',
})
export class NgxsDatasetService {
  constructor(
    private readonly ngxsDatasetStoreService: NgxsDatasetStoreService
  ) {
    this.ngxsDatasetStoreService.getDatasets();
  }

  getDatasets(): Observable<DatasetMapper[]> {
    return this.ngxsDatasetStoreService.ngxsDataset$.pipe(
      map(this.mapperDataset)
    )
  }

  private mapperDataset(dataset: DatasetResponseDto[]): DatasetMapper[] {
    return dataset.map((dataset) => ({
      body: dataset.body,
      title: dataset.title,
    }));
  }
}
