import {call, put, takeEvery} from 'redux-saga/effects'
import {todolistsAPI} from "../api/todolists-api";
import {asyncRemoveTodolistAC, removeTodolistAC, setTodolistsAC} from "../actions/todolistActions";

export function* getTodolistsWorker() {
    const todolists = yield call(todolistsAPI.getTodolists)
    yield put(setTodolistsAC(todolists))
}

export function* removeTodolistWorker({todolistId}: ReturnType<typeof asyncRemoveTodolistAC>) {
    const result = yield call(todolistsAPI.deleteTodolist, todolistId)
    if (result === 0) {
        yield put(removeTodolistAC(todolistId))
    }
}

export function* getTodolistsWatcher() {
    yield takeEvery('FETCH_TODOLISTS', getTodolistsWorker)
}

export function* removeTodolistWatcher() {
    yield takeEvery('ASYNC_REMOVE_TODOLIST', removeTodolistWorker)
}


