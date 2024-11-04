import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DatasetApiService } from '../../../../common/api/services/dataset.api.service';
import { DatasetApiActions } from './ngrx-dataset.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DatasetEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apiService: DatasetApiService
  ) {}

  loadDatasets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DatasetApiActions.loadDatasets),
      switchMap(() =>
        this.apiService.getDatasets().pipe(
          map((datasets) =>
            DatasetApiActions.getDatasets({ datasets })
          ),
          catchError((error) =>
            of(DatasetApiActions.loadDatasetsFailure({ error }))
          )
        )
      )
    )
  );

 
}
