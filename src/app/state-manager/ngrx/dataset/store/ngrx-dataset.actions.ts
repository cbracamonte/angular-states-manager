import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { DatasetResponseDto } from '../../../../common/api/dto/dataset-response.dto';

export const DatasetApiActions = createActionGroup({
  source: 'Dataset API Actions',
  events: {
    'Load Datasets': emptyProps(),
    'Load Datasets Failure': props<{ error: string | null }>(),
    'Get Datasets': props<{ datasets: DatasetResponseDto[] }>(),
  },
});
