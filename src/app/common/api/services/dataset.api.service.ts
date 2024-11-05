import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatasetResponseDto } from '../dto/dataset-response.dto';

@Injectable({
  providedIn: 'root',
})
export class DatasetApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getDatasets(): Observable<DatasetResponseDto[]> {
    return this.http.get<DatasetResponseDto[]>(this.apiUrl);
  }

  getDataset(id: number): Observable<DatasetResponseDto> {
    return this.http.get<DatasetResponseDto>(`${this.apiUrl}/${id}`);
  }
}
