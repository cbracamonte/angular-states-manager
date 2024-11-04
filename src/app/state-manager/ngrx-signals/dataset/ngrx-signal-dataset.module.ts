import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgrxSignalDatasetComponent } from './pages/ngrx-signal-dataset.component';

@NgModule({
  declarations: [NgrxSignalDatasetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NgrxSignalDatasetComponent,
      },
    ]),
  ],
})
export class NgrxSignalDatasetModule {}
