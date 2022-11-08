import React from "react";
import Todo from "./Todo";

export default function TodoList({todoList, onCheckBtnClick, onCheckRemoveClick}) {
    return (
        <>
            {todoList.map((todo) => (<Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} onCheckRemoveClick={onCheckRemoveClick}
            />))}
        </>
    )
}
