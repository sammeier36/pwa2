import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromGuards from './news/guards';
import * as containers from './news/containers';
import { NewsComponent } from './news/components/news-list/news.component';


const routes: Routes = [
  { path: '',
    canActivate: [fromGuards.NewsGuard], component: NewsComponent },
  { path: 'news',
    canActivate: [fromGuards.NewsGuard], component: NewsComponent },
  { path: 'news-detail/:newsId',
    canActivate: [fromGuards.NewsGuard], component: containers.NewsItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

