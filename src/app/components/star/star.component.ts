import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit{
    @Input() rating: number;
    integer: number;
    decimal: number;
    stars = new Array();


    ngOnInit(): void {
        this.integer = this.getIntgerPart(this.rating);
        this.decimal = this.getDecimalPart(this.rating);
        this.stars = new Array(this.integer);
        this.stars.fill(1);
        this.stars.push(this.decimal);
    }

    constructor() {
    }

    getDecimalPart(value: number): number {
        return Number((value % 1).toFixed(1));
    }

    getIntgerPart(value: number): number {
        return Math.trunc(value);
    }
}
