import { Component, inject } from '@angular/core';
import { NgrxSignalDatasetStore } from '../store/ngrx-signal-dataset.store';

@Component({
  selector: 'app-ngrx-signal-dataset',
  templateUrl: './ngrx-signal-dataset.component.html',
})
export class NgrxSignalDatasetComponent {

  datasetsStore = inject(NgrxSignalDatasetStore);

}
