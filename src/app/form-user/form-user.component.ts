import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  formUser:any;
  constructor(private fb:FormBuilder) {
    this.formUser=fb.group({
      FirstName:['',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]],
      LastName:[''],
      BirthDate:[''],
      Email:['',[Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]],
      Password:[''],
      Profession:[''],
      CustomerCat:['Customer']
    });
   }

  ngOnInit(): void {

  }
  get f(){
    return this.formUser.controls;
  }
}
