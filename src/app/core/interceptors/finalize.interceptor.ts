import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';

export const finalizeInterceptor: HttpInterceptorFn = (req, next) => {
  const _ToastrService = inject(ToastrService)
  const actionMethods = ['POST', 'PUT', 'DELETE'];


  return next(req).pipe(finalize(() => {
    if(actionMethods.includes(req.method)){
      if(req.method == "POST"){
        _ToastrService.success("Employee Added", "CURD")
      }else if (req.method == "PUT"){
        _ToastrService.info("Employee Edited", "CURD")
      }else{
        _ToastrService.warning("Employee Removed", "CURD")
      }
    }
  }))
};
