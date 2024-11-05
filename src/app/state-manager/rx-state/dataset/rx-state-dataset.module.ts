import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxState } from '@rx-angular/state';
import { RxStateDatasetStateService } from './store/rx-state-dataset-state.service';
import { RxStateDatasetService } from './service/rx-state-dataset.service';
import { RouterModule } from '@angular/router';
import { RxStateDatasetComponent } from './pages/rx-state-dataset.component';

@NgModule({
  declarations: [RxStateDatasetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RxStateDatasetComponent,
      },
    ]),
  ],
  providers: [RxState, RxStateDatasetStateService, RxStateDatasetService],
})
export class RxStateDatasetModule {}
