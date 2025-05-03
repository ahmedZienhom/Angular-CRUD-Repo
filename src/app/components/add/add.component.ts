import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { EmployeeManageService } from '../../core/services/employee-manage.service';

@Component({
  selector: 'app-add',
  imports: [RouterLink,ReactiveFormsModule,NgClass],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _EmployeeManageService = inject(EmployeeManageService);
  private readonly _Router = inject(Router);



  AddGroup:FormGroup = this._FormBuilder.group({
    firstName:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z]{3,20}$/)]],
    lastName:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z]{3,20}$/)]],
    email:[null,[Validators.required,Validators.email]],
    position:[null,[Validators.required,Validators.pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)]]
  })

  addEmployee(){
    if(this.AddGroup.valid){
      this._EmployeeManageService.AddEmployee(this.AddGroup.value).subscribe({
        next: _ => this._Router.navigate([""])
      })
    }
    this.AddGroup.markAsTouched
  }

}
