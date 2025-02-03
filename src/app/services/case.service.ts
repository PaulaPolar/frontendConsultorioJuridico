import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { Caso } from '../models/caso.model';  // Asumiendo que tienes un modelo Caso

@Injectable({
  providedIn: 'root'
})
export class CasoService {

  private baseUrl = `${environment.apiUrl}/caso`;

  constructor(private http: HttpClient) { }

  // Obtener casos por estudiante
  obtenerCasosPorEstudiante(idEstudiante: number): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.baseUrl}/estudiante/${idEstudiante}`);
  }

  // Actualizar caso
  actualizarCaso(idCaso: number, estado?: string, idEstudiante?: number): Observable<Caso> {
    let params = new HttpParams();
    if (estado) params = params.set('estado', estado);
    if (idEstudiante) params = params.set('idEstudiante', idEstudiante.toString());

    return this.http.put<Caso>(`${this.baseUrl}/${idCaso}`, params);
  }

  // Registrar un nuevo caso
  registrarCaso(idUsuario: number, tipoCaso: string, descripcion: string): Observable<Caso> {
    const casoData = { idUsuario, tipoCaso, descripcion };
    return this.http.post<Caso>(this.baseUrl, casoData);
  }
}