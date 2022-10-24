import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {
id:any;
  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['myid'];
    //console.log(this.id);
    this.ac.params.subscribe(
      (d)=>{
        console.log(d);
      }
    )
  }

}
