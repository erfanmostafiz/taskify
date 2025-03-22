import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { ToDoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";

function App() {
    // const todos = [
    //     { input: "Hello! Add your first todo!", complete: true },
    //     { input: "Get the groceries!", complete: false },
    //     { input: "Learn how to web design", complete: false },
    //     { input: "Say hi to gran gran", complete: true },
    // ];

    // React Hooks - for managing data on the page (Immutable)
    // useState(DefaultValue)
    const [todos, setTodos] = useState([
        { input: "Hello! Add your first todo!", complete: true },
    ]);

    const [selectedTab, setSelectedTab] = useState("Open");

    // Handler Function
    function handleAddTodo(newTodo) {
        // Copy of todo array.
        const newTodoList = [...todos, { input: newTodo, complete: false }];
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }

    function handleCompleteTodo(index) {
        let newTodoList = todos.map((todo, todoIndex) =>
            todoIndex === index ? { ...todo, complete: true } : todo
        );
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }

    function handleDeleteTodo(index) {
        let newTodoList = todos.filter((val, valIndex) => {
            return valIndex !== index;
        });
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }

    function handleSaveData(currTodos) {
        localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
    }

    // useEffect(Arg1, Arg2)
    // Arg1 - Callback function to be executed when the event that we're tracking is triggered
    // Arg2 - [] - Dependency array to determine which event that we're tracking
    useEffect(() => {
        if (!localStorage || !localStorage.getItem("todo-app")) {
            return;
        }
        let db = JSON.parse(localStorage.getItem("todo-app"));
        setTodos(db.todos);
    }, []);

    return (
        <>
            <Header todos={todos} />
            <Tabs
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                todos={todos}
            />
            <ToDoList
                handleCompleteTodo={handleCompleteTodo}
                handleDeleteTodo={handleDeleteTodo}
                selectedTab={selectedTab}
                todos={todos}
            />
            <ToDoInput handleAddTodo={handleAddTodo} />
        </>
    );
}

export default App;
