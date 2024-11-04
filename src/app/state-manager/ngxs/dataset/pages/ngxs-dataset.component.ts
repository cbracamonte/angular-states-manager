import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxsDatasetStoreService } from '../store/ngxs-dataset-store.service';
import { NgxsDatasetService } from '../services/ngxs-dataset.service';
import { Observable } from 'rxjs';
import { DatasetMapper } from '../../../../common/api/mappers/dataset.mapper';

@Component({
  selector: 'app-ngxs-dataset',
  templateUrl: './ngxs-dataset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxsDatasetComponent implements OnInit {
  datasets$!: Observable<DatasetMapper[]>;

  constructor(private ngxsDatasetService: NgxsDatasetService) {}

  ngOnInit(): void {
    this.datasets$ = this.ngxsDatasetService.getDatasets();
  }
}
