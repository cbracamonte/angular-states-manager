import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgrxDatasetService } from '../services/ngrx-dataset.service';
import { DatasetMapper } from '../../../../common/api/mappers/dataset.mapper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngrx-dataset',
  templateUrl: './ngrx-dataset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxDatasetComponent implements OnInit {
  datasets$!: Observable<DatasetMapper[]>;
  loading$ = this.ngrxDatasetService.loading$;

  constructor(private readonly ngrxDatasetService: NgrxDatasetService) {}

  ngOnInit(): void {
    this.datasets$ = this.ngrxDatasetService.getDatasets();
  }
}
