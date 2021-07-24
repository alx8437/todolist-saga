import {all} from 'redux-saga/effects'
import {addTodolistWatcher, changeTodolistWatcher, getTodolistsWatcher, removeTodolistWatcher} from "./todolistsSaga";
import {getTasksWatcher} from "./tasksSaga";

export function* rootWatcher() {
    yield all([getTodolistsWatcher(), getTasksWatcher(), removeTodolistWatcher(), addTodolistWatcher(), changeTodolistWatcher()])
}