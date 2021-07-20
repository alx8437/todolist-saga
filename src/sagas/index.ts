import {all} from 'redux-saga/effects'
import {getTodolistsWatcher} from "./todolistsSaga";

export function* rootWatcher() {
    yield all([getTodolistsWatcher()])
}