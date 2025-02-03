import { Component, Input, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CasoService } from '../../services/case.service';
import { Caso } from '../../models/caso.model';

@Component({
  selector: 'app-lista-casos',
  imports: [MatSlideToggleModule,],
  templateUrl: './lista-casos.component.html',
  styleUrl: './lista-casos.component.css'
})
export class ListaCasosComponent implements OnInit {

  casos: Caso[] = [];

  constructor(private casoService: CasoService) { }

  ngOnInit(): void {
    const idEstudiante = 1; 

    this.casoService.obtenerCasosPorEstudiante(idEstudiante).subscribe(
      (data) => {
        this.casos = data;
      },
      (error) => {
        console.error('Error al obtener los casos', error);
      }
    );
  }
}