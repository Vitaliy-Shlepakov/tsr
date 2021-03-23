import React, { useReducer } from 'react';


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

    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <div>
            <button onClick={() => dispatch({type: 'one'})}></button>
            <button onClick={() => dispatch({type: 'two'})}></button>
        </div>
    );
};

export default ReducerButtons;