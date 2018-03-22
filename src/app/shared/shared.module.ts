import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StyComponentsModule } from './components';
import { MaterialModule } from './material';

@NgModule({
  imports: [CommonModule, MaterialModule, StyComponentsModule, RouterModule],
  exports: [CommonModule, MaterialModule, StyComponentsModule, RouterModule]
})
export class SharedModule { }
