import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatNativeDateModule, MatIconModule,
         MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule,
         MatTabsModule
       } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as MATERIAL_MODULES from '@angular/material';

@NgModule({
imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule,
          MatNativeDateModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
          MatRadioModule, MatListModule, MatTableModule, MatTabsModule],

exports: [CommonModule, MatNativeDateModule, FormsModule, MatIconModule,  MatToolbarModule, MatButtonModule,
          MatCheckboxModule, MatCardModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,
          MatListModule, MatRadioModule, MatTableModule, MatTabsModule],
})
export class CustomMaterialModule { }
