import { Component, OnInit } from '@angular/core';

import { ITransaction } from '../models/ITransaction';
import { TRANSACTIONS } from '../data/transactions';
import { ICache } from '../models/ICache';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  public transactions: ITransaction[] = TRANSACTIONS;
  public types: string[] = ['income', 'outcome', 'loan', 'investment'];
  public cache: ICache = { income: 0, outcome: 0, loan: 0, investment: 0 };

  constructor() {}

  ngOnInit(): void {
    this.transactions.forEach((i: ITransaction) =>
      Object.keys(this.cache).forEach(
        (type: string) => type === i.type && this.cache[type]++
      )
    );
  }
}
