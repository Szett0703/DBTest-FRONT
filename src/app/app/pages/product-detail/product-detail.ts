import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  template: `
    <section class="product-detail">
      @if (producto) {
        <div class="detail-card">
          <div class="detail-header">
            <h2>{{ producto.nombre }}</h2>
          </div>
          <div class="detail-body">
            <div class="detail-info">
              <p class="info-label">ID del Producto:</p>
              <p class="info-value">{{ producto.id }}</p>
            </div>
            <div class="detail-info">
              <p class="info-label">Precio:</p>
              <p class="info-value price">\${{ producto.precio.toFixed(2) }}</p>
            </div>
            <div class="actions">
              <button (click)="volver()" class="btn-back">← Volver a productos</button>
            </div>
          </div>
        </div>
      } @else {
        <div class="not-found">
          <h2>Producto no encontrado</h2>
          <p>El producto solicitado no existe.</p>
          <button (click)="volver()" class="btn-back">← Volver a productos</button>
        </div>
      }
    </section>
  `,
  styles: `
    .product-detail {
      padding: 20px 0;
      min-height: 400px;
    }

    .detail-card {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      background: white;
    }

    .detail-header {
      padding: 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .detail-header h2 {
      margin: 0;
      font-size: 2rem;
    }

    .detail-body {
      padding: 30px;
    }

    .detail-info {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;
    }

    .detail-info:last-of-type {
      border-bottom: none;
    }

    .info-label {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 5px;
    }

    .info-value {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0;
    }

    .info-value.price {
      color: #667eea;
      font-size: 2rem;
    }

    .actions {
      margin-top: 30px;
    }

    .btn-back {
      padding: 12px 24px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s;
    }

    .btn-back:hover {
      background: #5568d3;
    }

    .not-found {
      text-align: center;
      padding: 60px 20px;
    }

    .not-found h2 {
      color: #e74c3c;
      margin-bottom: 10px;
    }

    .not-found p {
      color: #666;
      margin-bottom: 30px;
    }
  `
})
export class ProductDetailComponent implements OnInit {
  producto?: Producto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productsService.getProductoById(+id).subscribe({
        next: (data) => {
          this.producto = data;
        },
        error: (err) => {
          console.error('Error al cargar producto:', err);
        }
      });
    }
  }

  volver(): void {
    this.router.navigate(['/products']);
  }
}
