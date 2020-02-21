import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { News } from '../../models/news.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  newsItem$: Observable<News>;

  constructor(private store: Store<fromStore.NewsState>) { }

  ngOnInit() {

    this.newsItem$ = this.store.select(fromStore.getSelectedNewsItem);
    this.newsItem$.subscribe(res => console.log(res));
  }

}
