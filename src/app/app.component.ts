import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from './models/course.model';
import *  as CourseActions from './actions/course.action';

interface AppState {
  text: string; //our state has string type content
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userCourse: string;

  message: Observable<string>;
  courses: Observable<Course[]>;

  constructor(private store: Store<AppState>) {
    this.courses = this.store.select('course');
  }

  lowercaseChange() {
    this.store.dispatch({type: 'LOWERCASE'}); //action with type and optional payload is dispatched from component
  }

  uppercaseChange() {
    this.store.dispatch({type: 'UPPERCASE'});
  }

  addCourse() {
    this.store.dispatch(new CourseActions.AddAction({courseName: this.userCourse}));
  }

  deleteCourse(index: number) {
    this.store.dispatch(new CourseActions.DeleteAction(index));
  }
}
