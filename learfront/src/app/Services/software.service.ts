import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Software } from '../models/Software';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  private apisServerUrl = environment.apibaseUrl;

  constructor(private http: HttpClient) { }

  public getSoftwares(): Observable<Software[]> {
    return this.http.get<Software[]>('${this.apisServerUrl}/Softwares/liste');
  }

  public addSoftware(software: Software): Observable<Software> {
    return this.http.post<Software>('${this.apisServerUrl}/Softwares/ajouter', software);
  }

  
  public updateSoftware(software: Software): Observable<Software> {
    return this.http.put<Software>('${this.apisServerUrl}/Softwares/modifier', software);
  }
  

  public deleteSoftware(softwareId: number): Observable<void> {
    return this.http.delete<void>('${this.apisServerUrl}/Softwares/supprimer/${softwareId}');
  }
}
