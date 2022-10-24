import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
name=new FormControl('',[Validators.required]);
surname=new FormControl('aziz');

fg=new FormGroup({
  namefg:new FormControl('',[Validators.required, Validators.minLength(3)]),
  surnamefg:new FormControl('aziz 4slim'),
});

fbs=this.fb.group({
  namefb:['',[Validators.required, Validators.minLength(3)]],
  surnamefb:['khalil from builder'],
  cours:this.fb.array([
new FormControl('angular'),
new FormControl('react'),
  ]),
});

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  showFC(){
    console.log(this.name.valid);
    console.log(this.surname.value);
  }
  get namefg(){
    return this.fg.get('namefg');
  }
  get cours(){
    return this.fbs.get('cours') as FormArray
  }
  addcours(){
    this.cours.push(new FormControl(''),

    )
  }
  showfg(){
    console.log(this.fg.value)
  }
  deletecours(i:any){
this.cours.removeAt(i)
  }
  showfb(){
    console.log(this.fbs.value);
  }
}
