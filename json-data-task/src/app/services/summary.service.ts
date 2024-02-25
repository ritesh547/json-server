import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private baseApiUrl: string = "http://localhost:3000/Data";
  constructor(private http: HttpClient) { }

  public getSummary() {
    return this.http.get(this.baseApiUrl);
  }

  public updateSummary(id: number, data: any) {
    return this.http.put(`${this.baseApiUrl}/${id}`, data);
  }
  
}
