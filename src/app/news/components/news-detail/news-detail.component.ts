import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  @Input() newsItem: News;

  constructor(private store: Store<fromStore.NewsState>) { }

  ngOnInit() {
    console.log(this.newsItem);
  }

}
