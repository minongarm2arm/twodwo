// 제목, 내용 입력 및 추가 버튼

import React, { useRef, useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { createTodo } from "./redux/changeTodo";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(3);
  const inputRef = useRef(null);

  const onChangeInputTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeInputBody = (event0) => {
    setBody(event0.target.value);
  };

  const onClickAddButton = () => {
    setId(id + 1);
    dispatch(createTodo(id, title, body));
    
    setTitle("");
    setBody("");
    inputRef.current.focus();
  };

  return (
    <div className="input-box">
      <input
        className="title-input"
        name="title"
        value={title}
        type="text"
        ref={inputRef}
        placeholder="제목을 입력해주세요"
        onChange={onChangeInputTitle}
      />

      <input
        className="body-input"
        name="body"
        value={body}
        type="text"
        ref={inputRef}
        placeholder="내용을 입력해주세요"
        onChange={onChangeInputBody}
      />

      <button type="submit" className="add-btn" onClick={onClickAddButton}>
        추가
      </button>
    </div>
  );
};

export default Form;