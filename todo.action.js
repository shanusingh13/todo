import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constant/todo.constant"

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}

export const editTodo = (index,data) => {
    return {
        type: EDIT_TODO,
        payload: {
            index,
            data
        }
    }
}

export const updateTodo = (index,data) => {
    return {
        type: UPDATE_TODO,
        payload: {
            index,
            data
        }
    }
}