import React, { useReducer } from 'react'

const initialState = {
  count: 0,
  showText: true,
}

const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1,
        showText: state.showText
      };
    case 'toggleShowText':
      return {
        count: state.count,
        showText: !state.showText
      };
    default:
      return state;
  }
}

export default function UseReducer() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({type: 'INCREMENT'});
          dispatch({type: 'toggleShowText'});
        }}>
        Click here
      </button>

      {state.showText && <p>This is a text</p>}

    </div>
  )
}
