import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./state-manager/ngrx/dataset/ngrx-dataset.module').then(
        (m) => m.NgrxDatasetModule
      ),
  },
  {
    path: 'ngrx-signals',
    loadChildren: () =>
      import(
        './state-manager/ngrx-signals/dataset/ngrx-signal-dataset.module'
      ).then((m) => m.NgrxSignalDatasetModule),
  },
  {
    path: 'ngxs',
    loadChildren: () =>
      import('./state-manager/ngxs/dataset/ngxs-dataset.module').then(
        (m) => m.NgxsDatasetModule
      ),
  }
];
