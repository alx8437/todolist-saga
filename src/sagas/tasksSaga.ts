import {call, put} from "redux-saga/effects";
import {todolistsAPI} from "../api/todolists-api";


export function* getTasksWorker(todolistId: string) {
    const tasks = yield call(todolistsAPI.getTasks, todolistId)
    // put()
}

