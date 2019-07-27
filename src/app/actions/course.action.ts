import { Action } from '@ngrx/store';
import { Course } from '../models/course.model';

export const ADD_COURSE = '[Course] Add';
export const DELETE_COURSE = '[Course] Delete';

export class AddAction implements Action {
    readonly type = ADD_COURSE;
    
    constructor(public payload: Course) {}
}

export class DeleteAction implements Action {
    readonly type = DELETE_COURSE;

    constructor(public index: number) {}
}

export type All = AddAction | DeleteAction;