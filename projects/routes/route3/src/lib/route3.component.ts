import { Component } from '@angular/core';
import { TableComponent } from '../../../../shared/src/lib/components/table/table.component';

@Component({
  selector: 'lib-route3',
  standalone: true,
  imports: [TableComponent],
  template: `
    <app-table></app-table>
  `,
  styles: ``
})
export class Route3Component {

}
