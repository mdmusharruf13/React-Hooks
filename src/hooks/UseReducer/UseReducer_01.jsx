import React, { useReducer } from 'react'

const ACTION = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
};

const initialValue = { count: 0 };

const reducer = (state, action) => {
    switch(action.type) {
        case ACTION.INCREASE :
            return { count : state.count + 1};
        case ACTION.DECREASE :
            return { count : state.count - 1};
        default :
            return state;
    }
}

function UseReducer_01() {

    const handleIncrement = () => {
        dispatch({type: ACTION.INCREASE});
    }
    const handleDecrement = () => {
        dispatch({type: ACTION.DECREASE});
    }

    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
        <>
            <h3>{state.count}</h3>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </>
    )
}

export default UseReducer_01