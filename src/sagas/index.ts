import {all} from 'redux-saga/effects'
import {addTodolistWatcher, getTodolistsWatcher, removeTodolistWatcher} from "./todolistsSaga";
import {getTasksWatcher} from "./tasksSaga";

export function* rootWatcher() {
    yield all([getTodolistsWatcher(), getTasksWatcher(), removeTodolistWatcher(), addTodolistWatcher()])
}