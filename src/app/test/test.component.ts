import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
test='4twin6';
kolor='red';
  constructor() { }

  ngOnInit(): void {
  }
showMsg(){
  console.log('bonjour')
}
getColor(){
  if(this.kolor=='red'){
    this.kolor='pink'
  }
  return this.kolor;
}
}
