import { Course } from '../models/course.model';
import  *  as CourseActions  from '../actions/course.action';

export type Action = CourseActions.All;

const defaultState: Course[] = [{
    courseName: 'Javascript' 
}];

export function CoursesReducer(state = defaultState, action: Action) {
    switch(action.type) {
        case CourseActions.ADD_COURSE:
            return [...state, action.payload];

        case CourseActions.DELETE_COURSE:
            let tempState = [...state];
            tempState.splice(action.index, 1);
            return tempState;
        
        default:
            return defaultState;
    }
}