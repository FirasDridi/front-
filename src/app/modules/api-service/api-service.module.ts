import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ApiServiceRoutingModule } from './api-service-routing.module';
import { AddApiComponent } from './add-api/add-api.component';
import { ListApiComponent } from './list-api/list-api.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddApiComponent, ListApiComponent],
  imports: [
    CommonModule,
    ApiServiceRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule, FormsModule, MatSnackBarModule,MatButtonModule
  ],
})
export class ApiServiceModule {}
