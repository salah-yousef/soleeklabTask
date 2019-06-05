import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class ProductsComponent implements OnInit {
  dataSource: Observable<Product[]>;
  columnsToDisplay = ['id', 'Name', 'SKU', 'Date', 'Price'];
  expandedElement: Product | null;
  constructor(private dataservice: DataService) {  }

  ngOnInit() {
    this.dataSource = this.dataservice.getProducts();
  }


}

