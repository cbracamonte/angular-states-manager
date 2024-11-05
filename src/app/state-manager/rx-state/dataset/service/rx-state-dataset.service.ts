import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';
import { DatasetMapper } from '../../../../common/api/mappers/dataset.mapper';
import { RxStateDatasetStateService } from '../store/rx-state-dataset-state.service';

@Injectable()
export class RxStateDatasetService {
  constructor(
    private readonly rxStateDatasetStateService: RxStateDatasetStateService
  ) {}

  getDatasets(): Observable<DatasetMapper[]> {
    this.rxStateDatasetStateService.getDatasets();
    return this.rxStateDatasetStateService.datasets$.pipe(
      map((datasets) => datasets.map(this.mapperDataset))
    );
  }

  getDataset(id: number): Observable<DatasetMapper> {
    this.rxStateDatasetStateService.getDataset(id);
    return this.rxStateDatasetStateService.dataset$.pipe(
      map(this.mapperDataset)
    );
  }

  getLoading(): Observable<boolean> {
    return this.rxStateDatasetStateService.loading$;
  }

  private mapperDataset(dataset: DatasetResponseDto | null): DatasetMapper {
    return {
      body: dataset?.body ?? '',
      title: dataset?.title ?? '',
    };
  }
}
