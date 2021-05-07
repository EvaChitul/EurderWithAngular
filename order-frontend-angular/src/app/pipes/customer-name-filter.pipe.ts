import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from '../../models/customer';

@Pipe({
  name: 'customerNameFilter'
})
export class CustomerNameFilterPipe implements PipeTransform {

  transform(values: Customer[], searchText: string): any[] {
    const custText = searchText.toLocaleLowerCase();
    return values.filter(element => element.lastname.toLocaleLowerCase().includes(custText));
  }

}
