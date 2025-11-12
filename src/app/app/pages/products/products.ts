import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CommonModule],
  template: `
    <section class="products-section">
      <h2>Catálogo de Productos</h2>
      <p class="subtitle">Encuentra los mejores productos tecnológicos</p>

      <div class="products-grid">
        @for (producto of productos; track producto.id) {
          <div class="product-card">
            <div class="product-header">
              <h3>{{ producto.nombre }}</h3>
            </div>
            <div class="product-body">
              <p class="product-price">\${{ producto.precio.toFixed(2) }}</p>
              <a [routerLink]="['/products', producto.id]" class="btn-detail">Ver detalles</a>
            </div>
          </div>
        } @empty {
          <p class="no-products">No hay productos disponibles</p>
        }
      </div>
    </section>
  `,
  styles: `
    .products-section {
      padding: 20px 0;
    }

    .subtitle {
      color: #666;
      margin-bottom: 30px;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .product-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
      background: white;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .product-header {
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .product-header h3 {
      margin: 0;
      font-size: 1.2rem;
    }

    .product-body {
      padding: 20px;
    }

    .product-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #667eea;
      margin-bottom: 15px;
    }

    .btn-detail {
      display: inline-block;
      padding: 10px 20px;
      background: #667eea;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.3s;
    }

    .btn-detail:hover {
      background: #5568d3;
    }

    .no-products {
      grid-column: 1 / -1;
      text-align: center;
      color: #999;
      padding: 40px;
    }
  `
})
export class ProductsComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }
}
