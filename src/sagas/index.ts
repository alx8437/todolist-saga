import {all} from 'redux-saga/effects'
import {getTodolistsWatcher} from "./todolistsSaga";
import {getTasksWatcher} from "./tasksSaga";

export function* rootWatcher() {
    yield all([getTodolistsWatcher(), getTasksWatcher()])
}