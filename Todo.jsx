// 삭제, 완료, 상세 페이지 버튼

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
import {useDispatch} from "react-redux";
import { removeTodo, toggleTodo } from './redux/changeTodo';

const Todo = ({todoItem}) => {
    const dispatch = useDispatch();
    const {id, title, body, isDone} = todoItem;
    const navigate = useNavigate();

    return (
        <div className='wrap'>
        <div className='todoBox' key={id} isdone="false">
            <h3>{title}</h3>
            <p>{body}</p>
            <button className="removebtn"
              onClick={() => dispatch(removeTodo(id))}>삭제</button>
           {isDone === false ?
            <button className='donebtn' 
            onClick={()=>dispatch(toggleTodo(id))}>완료</button>
            : <button 
            onClick={()=>dispatch(toggleTodo(id))}
            className="canclebtn">취소</button>}
            <button className='donebtn'
            onClick={()=>navigate(`/detail/${id}`)}> 상세 페이지 </button>
        </div>
        </div>
    );
}

export default Todo;