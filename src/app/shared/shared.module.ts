import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
		SliderModule,
		MultiSelectModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    HttpClientModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
  ],
  providers:[AppService],
  exports:[   FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    InputNumberModule,
    InputTextModule,
    TagModule,
    TagModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
		SliderModule,
		MultiSelectModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    HttpClientModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
  ]
})
export class SharedModule { }
