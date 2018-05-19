import { NgModule } from '@angular/core';

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
    ]
})

export class SharedModule { }
