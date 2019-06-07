import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/product';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatBottomSheet } from '@angular/material';
import { AlertComponent } from '../alert/alert.component';
import { ShowProductComponent } from '../show-product/show-product.component';

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
  constructor(
    private dataservice: DataService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet) {  }

  ngOnInit() {
    this.dataSource = this.dataservice.getProducts();
  }

  onEdit(id: number) {
    this.router.navigate(['/edit/' + id]);
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(AlertComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.dataservice.deleteProduct(id).subscribe((data) => {
          this.dataSource = this.dataservice.getProducts();
          this.router.navigate(['/']);
        });
        this.snackBar.open('Okay the product is deleted', 'close', {
          duration: 3000,
        });
      }
    });
  }

  onView(product: Product) {
    this.bottomSheet.open(ShowProductComponent, {data: product});
  }
}

