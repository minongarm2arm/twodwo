import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
const todoList = useSelector((state)=>state.changeTodo.list);
 const navigate = useNavigate();
 const {id} = useParams();
 const todos = todoList.find((todo)=>todo.id === id);

 console.log(todos);

    return (
        <DetailBox>
            <p>id : {todos.id}</p>
            <h1>{todos.title}</h1>
            <h3>{todos.body}</h3>
            <DetailBack
            onClick={()=>{navigate('/')}}>이전으로 돌아가기</DetailBack>
        </DetailBox>
    );
};

const DetailBox = styled.div`
    width : 400px;
    height: 400px;
    margin: auto;
    border: 1px solid #ddd;
    border-radius : 15px;
    text-align: center;
`
const DetailBack = styled.button`
    background-color: cornsilk;
    color: limegreen;
    border: 2px solid rgb(119, 228, 113);
    border-radius: 15px;
    padding: 8px;`

export default Detail;