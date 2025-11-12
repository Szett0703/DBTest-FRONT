import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="home-section">
      <div class="hero">
        <h1>Bienvenido a TiendaDemo</h1>
        <p class="subtitle">Proyecto de prueba Angular 19 + .NET + SQL Server</p>
        <div class="features">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Angular 19</h3>
            <p>Framework moderno con componentes standalone</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>.NET Backend</h3>
            <p>API RESTful robusta y escalable</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💾</div>
            <h3>SQL Server</h3>
            <p>Base de datos confiable y potente</p>
          </div>
        </div>
        <div class="cta">
          <a routerLink="/products" class="btn-primary">Ver Productos</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .home-section {
      padding: 40px 0;
    }

    .hero {
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 15px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 50px;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 50px;
    }

    .feature-card {
      padding: 30px;
      border-radius: 12px;
      background: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .feature-card h3 {
      color: #667eea;
      margin-bottom: 10px;
    }

    .feature-card p {
      color: #666;
      line-height: 1.6;
    }

    .cta {
      margin-top: 40px;
    }

    .btn-primary {
      display: inline-block;
      padding: 15px 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }
  `
})
export class HomeComponent {}
