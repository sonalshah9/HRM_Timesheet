/**
 * Created by sonals on 3/28/17.
 */
import { Component } from '@angular/core';

@Component({
  templateUrl: './ViewTS.component.html'
})
export class ViewTSComponent  {
  fromDate = new Date(2017, 2, 27);
  toDate = new Date(2017, 3, 2);
}
