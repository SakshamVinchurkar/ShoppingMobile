import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../../../shared/models/product';

import { ProductService } from '../../../shared/services/product.service';

@Component({
	selector: 'app-cart-calculator',
	templateUrl: './cart-calculator.component.html',
	styleUrls: [ './cart-calculator.component.scss' ]
})
export class CartCalculatorComponent implements OnInit, OnChanges {
	@Input() products: Product[];

	totalValue = 0;
	constructor(private productService: ProductService) {
		
		
	}

	ngOnChanges(changes: SimpleChanges) {
		const dataChanges: SimpleChange = changes.products;

		const products: Product[] = dataChanges.currentValue;
		this.totalValue = 0;
		products.forEach((product) => {
			this.totalValue += product.productPrice;
		});
	}

	emptycart() {
console.log("here");
		this.productService.removeLocalCartProductcheckout();
		
	}
	ngOnInit() {}
}
