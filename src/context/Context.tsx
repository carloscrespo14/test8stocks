import { createContext } from 'react'
import { AppState } from '../interfaces/interfaces';
/* 
    General Conetxt to share info between components
*/
export type AppContextProps = {
    appState: AppState;
    updateState:(count: number, date: string) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);