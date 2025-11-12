import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="brand"><a routerLink="/">TiendaDemo</a></div>
      <nav class="nav">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a>
        <a routerLink="/products" routerLinkActive="active">Productos</a>
      </nav>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {}
