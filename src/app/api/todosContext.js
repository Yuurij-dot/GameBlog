import { createContext, useState } from "react";

export const TodosContext = createContext()

export const TodosProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: 'Gym',
            status: false
        },
        {
            id: 1,
            name: 'Work',
            status: false
        },
        {
            id: 1,
            name: 'Study',
            status: true
        }
    ])

    return (
        <TodosContext.Provider value = { {todos, setTodos}}>
            {children}
        </TodosContext.Provider>
    )
}