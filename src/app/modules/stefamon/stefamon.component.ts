import { Component, OnInit } from '@angular/core';
import { StefamonService } from '../../shared/services/stefamon.service';

@Component({
  selector: 'app-stefamon',
  templateUrl: './stefamon.component.html',
  styleUrls: ['./stefamon.component.css'],
  providers: [StefamonService]
})
export class StefamonComponent implements OnInit {

  stefamonList = [];

  constructor(
    private stefamonService: StefamonService
  ) { }

  ngOnInit(): void {
    this.stefamonService.list().subscribe(res => {
      this.stefamonList = res;
    });
  }

}