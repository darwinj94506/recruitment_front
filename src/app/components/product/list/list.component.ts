import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/productos.service';
import { Product, Employe } from '../../../interfaces'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public _products: Product []=[];
  _employe: Employe;

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.employe().subscribe(employe=>{
      this._employe = employe;
      this.productoService.list(employe.warWarehousesId)
      .subscribe(products => {
        console.log(products);
        this._products = [...products] 
       })
    })
  }

}
