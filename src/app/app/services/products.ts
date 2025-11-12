import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiUrl;

  // Datos simulados localmente
  private productosMock: Producto[] = [
    { id: 1, nombre: 'Laptop HP', precio: 899.99 },
    { id: 2, nombre: 'Mouse Logitech', precio: 25.50 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 89.99 },
    { id: 4, nombre: 'Monitor Dell 24"', precio: 199.99 },
    { id: 5, nombre: 'Audífonos Sony', precio: 149.99 }
  ];

  constructor(private http: HttpClient) {}

  // Método que retorna productos simulados
  getProductos(): Observable<Producto[]> {
    // Por ahora retorna datos locales
    return of(this.productosMock);

    // Cuando tengas el backend, descomentar:
    // return this.http.get<Producto[]>(`${this.apiUrl}/productos`);
  }

  // Método para obtener un producto por ID
  getProductoById(id: number): Observable<Producto | undefined> {
    const producto = this.productosMock.find(p => p.id === id);
    return of(producto);

    // Cuando tengas el backend, descomentar:
    // return this.http.get<Producto>(`${this.apiUrl}/productos/${id}`);
  }
}
