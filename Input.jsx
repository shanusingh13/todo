import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../redux/action/todo.action';

export default function Input() {
    let {editData} = useSelector(state => state);

    const dispatch = useDispatch();
    let [todo, setTodo] = useState('');

    const inputChange = (event) => {
        setTodo(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();

        if(editData.index !== '') {
            dispatch(updateTodo(editData.index, todo))
        }else {
            dispatch(addTodo(todo))
        }

        setTodo('');
    }

    useEffect(() => {
        setTodo(editData.data)
    }, [editData.index, editData.data])

    return (
        <form className="row" onSubmit={submit}>
            <div className="col-10">
               
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Add Todo'
                    value={todo}
                    onChange={inputChange} />
                    <br/>

            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">
                    {
                        editData.index === '' ? "ADD": "UPDATE"
                    }
                </button>
            </div>
        </form>
    )
}