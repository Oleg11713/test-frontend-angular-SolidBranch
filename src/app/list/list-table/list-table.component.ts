import { Component, Input } from '@angular/core';

import { ITransaction } from '../../models/ITransaction';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
})
export class ListTableComponent {
  @Input() transactions?: ITransaction[];

  constructor() {}
}
