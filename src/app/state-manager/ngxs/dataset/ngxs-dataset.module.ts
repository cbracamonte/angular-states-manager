import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { NgxsDatasetComponent } from './pages/ngxs-dataset.component';
import { NgxsDatasetState } from './store/ngxs-dataset.state';

@NgModule({
  declarations: [NgxsDatasetComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([NgxsDatasetState]),
    RouterModule.forChild([{ path: '', component: NgxsDatasetComponent }]),
  ],
})
export class NgxsDatasetModule {}
