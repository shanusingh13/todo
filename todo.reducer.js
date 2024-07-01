import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constant/todo.constant";

const initialState = {
    todos: ['shanu'],
    editData: {
        index: '',
        data: ''
    }
}
//'breakfast', 'lunch', 'dinner'

const TodoReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case EDIT_TODO: 
            return {
                ...state,
                editData: {
                    index: action.payload.index,
                    data: action.payload.data
                }
            }

        case UPDATE_TODO: 
            let updatedTodos = state.todos.map((todo,index) => {
                if(index === action.payload.index) {
                    return action.payload.data
                }

                return todo
            })

            return {
                ...state,
                todos: [...updatedTodos],
                editData: {
                    index: '',
                    data: ''
                }
            }

        case DELETE_TODO: 
            let filterData = state.todos.filter((value) => value !== action.payload)

            return {
                ...state,
                todos: [...filterData]
            }

        default:
            return state;
    }
}

export default TodoReducer;