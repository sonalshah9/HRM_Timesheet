/**
 * Created by sonals on 3/24/17.
 */
import{Injectable} from '@angular/core';
import {Http} from '@angular/http';
import  'rxjs/add/operator/map';
import {Data} from './Data'


@Injectable()
export class AppService {
  constructor(private http: Http) {};

  getData() {
    return this.http.get('app/data.json').map(response => <Data[]>response.json().data);

  }
}
