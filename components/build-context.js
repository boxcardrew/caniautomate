import React from 'react';
import Cookie from 'js-cookie';

const setListCookie = (list) => {
  Cookie.remove("list");
  Cookie.set("list", list)
}

const getListCookie = () => {
  const listCookie = Cookie.get("list");
  if (listCookie === undefined) {
    return [];
  } else {
    return JSON.parse(listCookie)
  }
}

const BuildStateContext = React.createContext();
const BuildDispatchContext = React.createContext();

function buildListReducer(state, action) {
  switch (action.type) {
    case 'add': {
      //add items to state and cookies
      return {
        list: [...state.list, action.payload]
      }
    }
    case 'remove': {
      //remove items from state and cookies
      return {
        list: state.list.filter(
          item => item !== action.payload
        )
      } 
    }
    default: {
      throw new Error(`Undefined action type: ${action.type}`)
    }
  }
}

function BuildListProvider({children}) {
  const [state, dispatch] = React.useReducer(buildListReducer, {list: getListCookie()})
  return (
    <BuildStateContext.Provider value={state}>
      <BuildDispatchContext.Provider value={dispatch}>
        {children}
      </BuildDispatchContext.Provider>
    </BuildStateContext.Provider>
  )
}

function useListState() {
  const context = React.useContext(BuildStateContext)
  if (context === undefined) {
    throw new Error('useListState must be used within a ListProvider')
  }
  return context
}

function useListDispatch() {
  const context = React.useContext(BuildDispatchContext)
  if (context === undefined) {
    throw new Error('UseListDispatch must be used within a ListProvider')
  }
  return context
}

export {BuildListProvider, useListState, useListDispatch, setListCookie, getListCookie}



