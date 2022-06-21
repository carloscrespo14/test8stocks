
import { useReducer } from "react"
import { AppState } from "../interfaces/interfaces"
import { AppReducer } from "./AppReducer"
import { AppContext } from "./Context"

const INITIAL_STATE: AppState = {
    count: 0,
    date: ""
}

interface AppProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const AppProvider = ({ children }: AppProviderProps) => {

    const [appState, dispatch ] = useReducer(AppReducer, INITIAL_STATE)

    const updateState = (count: number, date: string) => {
        dispatch({type:'updateState', payload:{count, date}})
    }

    return(
        <AppContext.Provider value={{ appState, updateState }}>
            { children }
        </AppContext.Provider>
    )
}