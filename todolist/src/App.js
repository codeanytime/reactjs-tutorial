import TodoList from "./components/Todolist";
import Textfield from "@atlaskit/textfield"
import Button from "@atlaskit/button"
import { useCallback, useState } from "react"
import { v4 } from "uuid"

function App() {
  const [todoList, setTodoList] = useState([])
  const [textInput, setTextInput] = useState("")

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, [])

  const onAddButtonClick = useCallback((e) => {
    setTodoList([{id: v4(), name: textInput, isCompleted: false} , ...todoList]);
    console.log("todolist" + todoList);
    setTextInput("");
  }, [ todoList, textInput ])

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
        <TodoList todoList={todoList}/>
    </>
  );
}

export default App;
