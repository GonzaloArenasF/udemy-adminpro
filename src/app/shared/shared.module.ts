import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BredcrumsComponent } from './bredcrums/bredcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule ({
    declarations: [
        BredcrumsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
    exports: [
        BredcrumsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ]
})

export class SharedModule { }
