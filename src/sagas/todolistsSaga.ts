import {call, put, takeEvery} from 'redux-saga/effects'
import {todolistsAPI} from "../api/todolists-api";
import {setTodolistsAC} from "../actions";

export function* getTodolistsWorker() {
    const todolists = yield call(todolistsAPI.getTodolists)
    yield put(setTodolistsAC(todolists))
}

export function* getTodolistsWatcher() {
    yield takeEvery('FETCH_TODOLISTS', getTodolistsWorker)
}

