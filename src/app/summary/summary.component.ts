import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public summaryList: any = [];
  constructor(private summaryService: SummaryService) {

  }
  ngOnInit(): void {
    this.summaryService.getSummary().subscribe((res) => {
      console.log("res", res);
      this.summaryList = res;
    })
  }
}
