import {call, put, takeEvery} from 'redux-saga/effects'
import {todolistsAPI} from "../api/todolists-api";
import {
    addTodolistAC,
    asyncAddTodolistAC,
    asyncRemoveTodolistAC,
    removeTodolistAC,
    setTodolistsAC
} from "../actions/todolistActions";

//workers
export function* getTodolistsWorker() {
    const todolists = yield call(todolistsAPI.getTodolists)
    yield put(setTodolistsAC(todolists))
}

export function* removeTodolistWorker({todolistId}: ReturnType<typeof asyncRemoveTodolistAC>) {
    const resultCode = yield call(todolistsAPI.deleteTodolist, todolistId)
    if (resultCode === 0) {
        yield put(removeTodolistAC(todolistId))
    }
}

export function* addTodolistWorker({title}: ReturnType<typeof asyncAddTodolistAC>) {
    const todolist = yield call(todolistsAPI.createTodolist, title)
    yield put(addTodolistAC(todolist))
}

//watchers
export function* getTodolistsWatcher() {
    yield takeEvery('FETCH_TODOLISTS', getTodolistsWorker)
}

export function* removeTodolistWatcher() {
    yield takeEvery('ASYNC_REMOVE_TODOLIST', removeTodolistWorker)
}

export function* addTodolistWatcher() {
    yield takeEvery('ASYNC_ADD_TODOLIST', addTodolistWorker)
}


