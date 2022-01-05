import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { tap, timeInterval } from "rxjs/operators";
import { SpinnerService } from "./spinner/spinner.service";

@Injectable()
export class HttpInterceptorSpinner implements HttpInterceptor {

    constructor(private spinner: SpinnerService, private _toast: ToastrService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         //console.log("Intecptor provider prints");
         this.spinner.requestStarted();
         //console.log("From HTTP Inteceptors: "+req.url);
        return this.handler(req,next);
    }

    handler(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe( tap(
                (event: any) => {
                    if(event instanceof HttpResponse) {
                           this.spinner.requestEnded(); 
                    }
                },
                (error: HttpErrorResponse) => {
                    this.spinner.resetSpinner();
                    this._toast.error("An error occured!");
                    throw error;
                }
            ));
    }

}