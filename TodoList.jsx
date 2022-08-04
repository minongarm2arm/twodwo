import React from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

const TodoList = () => {
    return(
      <div className="todolist-container">
          <Header />
          <Form/>
          <List
            title = {'Working'}
            isDoneList={false}/>
          <List
            title = {'Done'}
            isDoneList={true}/>
      </div>);
};

export default TodoList;