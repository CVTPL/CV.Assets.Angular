import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';

@NgModule({
  declarations: [AssetsComponent],
  imports: [CommonModule, AssetsRoutingModule, MaterialSharedModule],
  exports: [AssetsComponent],
})
export class AssetsModule {}
