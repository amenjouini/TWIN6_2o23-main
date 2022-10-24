import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
tab:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  showData(f:NgForm){
this.tab.push(f);
  }
  remove(i:any){
    
this.tab.splice(this.tab.indexOf(i),1);
  }
}
