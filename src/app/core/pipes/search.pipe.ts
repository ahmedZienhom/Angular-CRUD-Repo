import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees:IEmployee[], term:string): IEmployee[] {
    if(employees){
      return employees.filter(e => 
        e.firstName.toLowerCase().includes(term.toLowerCase()) ||
        e.lastName.toLowerCase().includes(term.toLowerCase()))
    }
    return employees
  }

}
