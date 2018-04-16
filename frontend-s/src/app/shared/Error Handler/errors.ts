import { NotFoundError } from "./not-found-error";
import { AppError } from "./app-error";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import { ServerError } from "./server-error";
export class Errors{
  public static handleError(error:Response){
        if(error.status === 404){
        return Observable.throw(new NotFoundError(error))
        }
        else if(error.status === 500){
        return Observable.throw(new ServerError(error))
        }
        else
        return Observable.throw(new AppError(error));
      }
      
}