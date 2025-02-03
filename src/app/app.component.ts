import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GestionCasosComponent } from './pages/gestion-casos/gestion-casos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GestionCasosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Consultorio juridico';
}
