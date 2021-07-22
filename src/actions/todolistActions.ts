import {
    AddTodolistActionType, ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType, FilterValuesType,
    RemoveTodolistActionType, SetTodolistsActionTypes
} from "../state/todolists-reducer";
import {v1} from "uuid";
import {TodolistType} from "../api/todolists-api";

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const asyncRemoveTodolistAC = (todolistId: string) => {
    return {type: 'ASYNC_REMOVE_TODOLIST', todolistId}
}

export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title: title, todolistId: v1()}
}
export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter}
}

export const setTodolistsAC = (todolists: Array<TodolistType>): SetTodolistsActionTypes => {
    return {type: 'SET_TODOLISTS', todolists}
}

export const fetchTodolistsAC = () => {
    return {type: 'FETCH_TODOLISTS'}
}