import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  resultUrl: string;

  constructor(private http: HttpClient) {
    this.resultUrl = `${environment.baseUrl}`;
  }

  public query(word: string): Promise<any> {
    return this.http
      .get(`${this.resultUrl}/api/v1/search?word=${word}&resumed=true`)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  getDocument(fileName: string) {
    return this.http.get(`${this.resultUrl}/api/v1/search/download/${fileName}`, { responseType: 'blob', observe: 'response'}).pipe(
      map((res: any) => {
        return new Blob([res.body], { type: 'application/pdf' });
      })
    );
  }
}
