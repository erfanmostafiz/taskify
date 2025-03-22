import { useState } from "react";

export function ToDoInput(props) {
    const { handleAddTodo } = props;
    const [inputValue, setInputValue] = useState("");
    console.log(inputValue);
    return (
        <div className="input-container">
            <input
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                placeholder="Add Task"
            />
            <button
                onClick={() => {
                    if (!inputValue) {
                        return;
                    } // Do nth if input is empty
                    handleAddTodo(inputValue);
                    setInputValue(""); //Blank out the input after
                }}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
