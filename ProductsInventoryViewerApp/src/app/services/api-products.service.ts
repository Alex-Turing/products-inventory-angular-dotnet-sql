import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IMedication {
    medicationId:          number;
    medicationDescription: string;
    medicationCost:        number;
    packageSize:           string;
    strength:              string;
    sig:                   string;
    unitsUsedYtd:          number;
    lastPrescribedDate:    Date;
}

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  private baseURL = 'https://localhost:7055/api/Medications';

  constructor(private _httpClient: HttpClient) { }

  getMedications(): Observable<IMedication[]> {
    return this._httpClient.get<IMedication[]>(this.baseURL);
  }

  getMedicationById(id: number): Observable<IMedication> {
    return this._httpClient.get<IMedication>(`${this.baseURL}/${id}`);
  }

  addMedication(medication: IMedication): Observable<IMedication> {
    return this._httpClient.post<IMedication>(this.baseURL, medication);
  }

  updateMedication(medication: IMedication): Observable<IMedication> {
    return this._httpClient.put<IMedication>(`${this.baseURL}/${medication.medicationId}`, medication);
  }

  deleteMedication(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseURL}/${id}`);
  }
}
