import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesReducer } from './reducers/courses.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({course: CoursesReducer}) //giving StoreModule a key of state (here, course which will be selected in component file)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
