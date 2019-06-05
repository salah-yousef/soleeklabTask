import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Product, valid: boolean }) {
    console.log(value, valid);
    this.dataservice.addProduct(value).subscribe(() => {
      this.router.navigate(['/']);
    });

  }

}

