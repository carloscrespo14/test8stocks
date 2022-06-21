import { AppState } from "../interfaces/interfaces";

type AppAction = 
    | { type: 'updateState', payload: {count: number, date: string} }

export const AppReducer = (state: AppState, action: AppAction) => {

    switch (action.type) {
        case 'updateState':
            return {
                ...state,
                count: action.payload.count,
                date: action.payload.date
            }
    
        default:
            return state;
    }
}