import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RxStateDatasetService } from '../service/rx-state-dataset.service';
import { Observable } from 'rxjs';
import { DatasetMapper } from '../../../../common/api/mappers/dataset.mapper';

@Component({
  selector: 'app-rx-state-dataset',
  templateUrl: './rx-state-dataset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxStateDatasetComponent implements OnInit {
  loading$ = this.rxStateDatasetService.getLoading();
  datasets$!: Observable<DatasetMapper[]>;
  constructor(private readonly rxStateDatasetService: RxStateDatasetService) {}

  ngOnInit(): void {
    this.datasets$ = this.rxStateDatasetService.getDatasets();
  }
}
