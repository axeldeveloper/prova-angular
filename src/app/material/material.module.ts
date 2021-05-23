import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, 
  MatSidenavModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatButtonModule, 
  MatListModule, 
  MatMenuModule, 
  MatTooltipModule, 
  MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
