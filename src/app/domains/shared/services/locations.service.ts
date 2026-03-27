import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.staging';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private http = inject(HttpClient);

  getLocations(origin: string): Observable<{ id: string; name: string }[]> {
    const url = new URL(`${environment.apiUrl}/api/v1/locations`);

    if (origin) {
      url.searchParams.set('origin', origin);
    }

    return this.http.get<{ id: string; name: string }[]>(String(url));
  }
}
