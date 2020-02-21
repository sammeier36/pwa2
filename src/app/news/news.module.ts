import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from './news.service';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

// guards
import * as fromGuards from './guards';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';




@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.components,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    StoreModule.forFeature('news', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [NewsService, ...fromGuards.guards],
  exports: [
    ...fromComponents.components,
    ...fromContainers.components,
  ],
})
export class NewsModule { }
