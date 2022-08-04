import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

const TodoList = () => {
    return(
      <div className="todolist-container">
        <Layout>
          <Header />
          <Form/>
          <List
            title = {'Working'}
            isDoneList={false}/>
          <List
            title = {'Done'}
            isDoneList={true}/>
        </Layout>
      </div>
    );
};

export default TodoList;