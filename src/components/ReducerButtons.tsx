import React, { useReducer, useRef, useContext } from 'react';
import UseClickOutside from './useClickOutside';
import { GlobalContext } from "./GlobalState";


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

const ReducerButtons = () => {

    const { rValue, turnOff, turnOn } = useContext(GlobalContext);
    const ref = useRef<HTMLDivElement>(null!);

    UseClickOutside(ref, () => console.log('Click outside'))
    return (
        <div>
            <button onClick={turnOff}>One</button>
            <button onClick={turnOn}>Two</button>
        </div>
    );
};

export default ReducerButtons;