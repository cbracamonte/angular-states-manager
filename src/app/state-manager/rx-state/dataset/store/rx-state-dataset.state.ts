import { DatasetResponseDto } from "../../../../common/api/dto/dataset-response.dto";

export interface RxStateDatasetState {
    datasets: DatasetResponseDto[],
    dataset: DatasetResponseDto | null,
    loading: boolean,
    error: string | null,
}