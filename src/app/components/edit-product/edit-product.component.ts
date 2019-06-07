import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product = {
    id: 0,
    Name: 'pp',
    SKU: '',
    Date: '',
    Description: '',
    Price: 0,
    starRating: 0,
    Image: ''
  };

  id: string;
  constructor(private dataservice: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataservice.getProduct(this.id).subscribe(product => {
      this.product = product;
    });
  }

  onSubmit({ value, valid }: { value: Product, valid: boolean }) {
    this.dataservice.editProduct(value, +this.id).subscribe(() => {
      this.router.navigate(['/']);
    });

  }

}
