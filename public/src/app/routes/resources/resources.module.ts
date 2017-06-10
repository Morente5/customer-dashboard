import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';

@NgModule({
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ],
  declarations: [ResourcesComponent]
})
export class ResourcesModule { }
