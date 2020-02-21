import { Component, OnInit } from '@angular/core';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NewsService } from '../../news.service';
import * as fromStore from '../../store';
import { News } from '../../models/news.model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent implements OnInit {

  news$: Observable<News[]>;

  constructor(private router: Router, private newsService: NewsService, private store: Store<fromStore.NewsState>) { 

  }

  newsDetailOpen(event: News) {

    this.router.navigate(['/news-detail', event.id]);

    }

  ngOnInit() {

    //this.store.dispatch(new fromStore.GetNews());
    this.news$ = this.store.select(fromStore.getAllNews);

  }

}
