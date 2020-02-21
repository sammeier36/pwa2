import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatIconModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatIconModule
    ]
})
export class SharedModule {}
