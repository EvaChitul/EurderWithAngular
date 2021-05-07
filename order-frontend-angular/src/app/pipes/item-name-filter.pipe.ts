import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../../models/item';

@Pipe({
  name: 'itemNameFilter'
})
export class ItemNameFilterPipe implements PipeTransform {

  transform(values: Item[], searchText: string): any[] {
    const exText = searchText.toLocaleLowerCase();
    return values.filter(element => element.name.toLocaleLowerCase().includes(exText));
  }

}
