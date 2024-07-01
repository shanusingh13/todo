import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo } from '../redux/action/todo.action';

export default function List() {
    let { todos } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            {
                todos.length > 0 ? todos.map((item, index) => (
                    <li className="list-group-item d-flex justify-content-between" key={index}>
                        <div>{item}</div>
                        
                        
                        <div>
                            <button
                                className='btn btn-warning mx-2'
                                onClick={() => dispatch(editTodo(index, item))}>
                                Edit
                            </button>

                            <button 
                                className='btn btn-danger'
                                onClick={() => dispatch(deleteTodo(item))}>
                                    Delete
                            </button>
                           
                        </div>
                    </li>
                )) : <li className="list-group-item">No Todo</li>
            }
        </ul>
    )
}
