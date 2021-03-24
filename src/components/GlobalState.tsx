import React, { createContext, useReducer } from "react";

const initialValues = {
    rValue: true,
    turnOff: () => {},
    turnOn: () => {},
};

const intialState = {
    rValue: true
};

type Action = {
    type: 'one' | "two"
};

type State = typeof intialState

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'one':
            return {
                rValue: true
            }
        case 'two':
            return {
                rValue: false
            }
    }
}

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValues);

    return (
        <GlobalContext.Provider value={{
            rValue: state.rValue,
            turnOff: () => dispatch({type: "one"}),
            turnOn: () => dispatch({type: "two"}),
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

