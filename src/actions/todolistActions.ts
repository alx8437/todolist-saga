import {
    AddTodolistActionType, ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType, FilterValuesType,
    RemoveTodolistActionType, SetTodolistsActionTypes
} from "../state/todolists-reducer";
import {TodolistType} from "../api/todolists-api";

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const asyncRemoveTodolistAC = (todolistId: string) => {
    return {type: 'ASYNC_REMOVE_TODOLIST', todolistId}
}

export const addTodolistAC = (todolist: TodolistType): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', todolist}
}

export const asyncAddTodolistAC = (title: string) => {
    return {type: 'ASYNC_ADD_TODOLIST', title}
}

export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}

export const asyncChangeTodolistTitle = (id: string, title: string) => {
    return {type: 'ASYNC_CHANGE_TODOLIST', title, id}
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