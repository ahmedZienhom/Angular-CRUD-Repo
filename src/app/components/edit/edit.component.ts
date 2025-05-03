import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IEmployee } from '../../core/interfaces/iemployee';
import { EmployeeManageService } from '../../core/services/employee-manage.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _EmployeeManageService = inject(EmployeeManageService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _Router = inject(Router);
  submitted:boolean = false

  private emp!:IEmployee;

  EditGroup:FormGroup = this._FormBuilder.group({
    firstName:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z]{3,20}$/)]],
    lastName:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z\s]{3,20}$/)]],
    email:[null,[Validators.required,Validators.email]],
    position:[null,[Validators.required,Validators.pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)]]
  })

  ngOnInit(): void {
    this._EmployeeManageService.getSingleEmployee(this._ActivatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: data =>{
        this.emp = data;
        this.EditGroup.setValue({
          firstName: this.emp.firstName,
          lastName: this.emp.lastName,
          email: this.emp.email,
          position: this.emp.position
        })
      }
    })
  }

  EditEmployee(){
    if(this.EditGroup.valid){
      this._EmployeeManageService.EditEmployee(this._ActivatedRoute.snapshot.paramMap.get('id')!,this.EditGroup.value).subscribe({
        next: data => {
          this.submitted = true;
          
          this._Router.navigate([""])
        }
      })
    }
    this.EditGroup.markAsTouched
  }

  
  confirmOut():boolean {
    if(this.EditGroup.dirty && !this.submitted && this.EditGroup.value != this.emp)
    {
      return confirm("You Have Unsaved Changes!! Are You Sure You Want To Leave ??");
    }
    return true
  }
}
