import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ITransaction } from '../models/ITransaction';
import { TRANSACTIONS } from '../data/transactions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public transactions: ITransaction[] = TRANSACTIONS;
  public types: string[] = ['income', 'outcome', 'loan', 'investment'];
  public tab!: number;

  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.tab = queryParam['tab'];
    });
  }

  public filterTransactionByType(selectedType: string): ITransaction[] {
    return this.transactions.filter((i) => i.type === selectedType);
  }
}
