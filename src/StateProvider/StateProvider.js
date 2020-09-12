import React,{createContext,useReducer, useContext} from 'react'

export const StateContext =createContext()

export const UseStateValue =()=>useContext(StateContext)
export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
)
