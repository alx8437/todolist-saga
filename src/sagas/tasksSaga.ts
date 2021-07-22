import {call, put, takeEvery} from "redux-saga/effects";
import {todolistsAPI} from "../api/todolists-api";
import {fetchTasksAC, setTasksAC} from "../actions/tasksActions";



export function* getTasksWorker({todolistId}: ReturnType<typeof fetchTasksAC>) {
    const tasks = yield call(todolistsAPI.getTasks, todolistId)
    yield put(setTasksAC(todolistId, tasks))
}

export function* getTasksWatcher() {
    yield takeEvery('FETCH_TASKS', getTasksWorker)
}

