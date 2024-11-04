import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgrxDatasetComponent } from './pages/ngrx-dataset.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DatasetEffects } from './store/ngrx-dataset.effects';
import { NGRX_DATASET_FEATURE_KEY } from './store/ngrx-dataset.state';
import { ngrxDatasetReducer } from './store/ngrx-dataset.reducer';

@NgModule({
  declarations: [NgrxDatasetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NgrxDatasetComponent,
      },
    ]),
    StoreModule.forFeature(NGRX_DATASET_FEATURE_KEY, ngrxDatasetReducer),
    EffectsModule.forFeature([DatasetEffects]),
  ],
})
export class NgrxDatasetModule {}
