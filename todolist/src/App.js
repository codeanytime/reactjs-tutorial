import TodoList from "./components/Todolist";
import Textfield from "@atlaskit/textfield"
import Button from "@atlaskit/button"
import { useCallback, useState, useEffect } from "react"
import { v4 } from "uuid"

const TODO_APP_STORAGE_KEY = 'TODO_APP';

function App() {
  const [todoList, setTodoList] = useState([])
  const [textInput, setTextInput] = useState("")

  useEffect(() => {
    const todoListStorage = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (todoListStorage) {
      setTodoList(JSON.parse(todoListStorage));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList])
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, [])

  const onAddButtonClick = useCallback((e) => {
    setTodoList([{id: v4(), name: textInput, isCompleted: false} , ...todoList]);
    setTextInput("");
  }, [ todoList, textInput ])

  const onCheckBtnClick = useCallback((id) => {
    console.log("check btn click: " + id);
    setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: true} : todo));
  }, [])

  const onCheckRemoveClick = useCallback((id) => {
    console.log("remove click" + id);
    let updateTodo = [...todoList];
    updateTodo.splice(id, 1);
    setTodoList(updateTodo);
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(updateTodo));
  }, [todoList])

  return (
    <>
        <h1>Danh sách việc cần làm</h1>
        <Textfield name='add-todo' placeholder='Thêm việc cần làm ...'
          elemAfterInput={
            <Button isDisabled={!textInput} appearance='primary' onClick={onAddButtonClick}>
                Thêm
            </Button>
            } css={{padding: "2px 4px 2px"}
          } value={textInput} onChange={onTextInputChange}>
        </Textfield>
        <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} onCheckRemoveClick={onCheckRemoveClick}/>
    </>
  );
}

export default App;
