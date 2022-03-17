import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCreate } from './components/editcreate/editcreate.component';
import { DeleteFormComponent } from './components/delete-form/delete-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { BtnComponent } from './components/btn/btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './components/input/input.component';
import { MatSelectModule } from '@angular/material/select';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EditCreate,
    DeleteFormComponent,
    BtnComponent,
    InputComponent,
    DropdownComponent,
    routingComponents,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
