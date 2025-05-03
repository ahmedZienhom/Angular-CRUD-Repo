import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { EmployeeManageService } from '../../core/services/employee-manage.service';
import { IEmployee } from '../../core/interfaces/iemployee';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage',
  imports: [RouterLink,SearchPipe,FormsModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent  {
  private readonly _EmployeeManageService = inject(EmployeeManageService);
  selectedEmployee: any = null;
  emplyees!:IEmployee[];
  term:string = "";
  EmployeesPerPage:number = 5;
  currentPage:number = 1;
  paginatedEmployees: IEmployee[] = [];
  arr!:any[];

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this._EmployeeManageService.getEmployees().subscribe({
      next: data => {
        this.emplyees = data;
        this.updatePaginatedEmplyees();
       this.arr = Array(Math.ceil(this.emplyees.length / this.EmployeesPerPage))
      }
    })
  }



  openDeleteModal(emp: any) {
    this.selectedEmployee = emp;
  }

  closeModal() {
    this.selectedEmployee = null;
  }

  confirmDelete() {
    if (this.selectedEmployee) {
      this.handelDelete(this.selectedEmployee.id);
      this.closeModal();
    }
  }


  handelDelete(id:string){
    this._EmployeeManageService.deleteEmployee(id).subscribe({
      next: () => this.getEmployees()
    });
  }

  updatePaginatedEmplyees() {
    const startIndex = (this.currentPage - 1) * this.EmployeesPerPage;
    const endIndex = startIndex + this.EmployeesPerPage;
    this.paginatedEmployees = this.emplyees.slice(startIndex, endIndex);
  }
  goToPage(page: number) {
    if(!(page < 1 || page > Math.ceil(this.emplyees.length / this.EmployeesPerPage)))
    {
      this.currentPage = page;
      this.updatePaginatedEmplyees();
    }
  }
  
}
