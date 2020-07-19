import React from "react";
import Cookie from "js-cookie";
import fetcher from "../libs/fetcher";

const setListCookie = (list) => {
  Cookie.remove("list");
  Cookie.set("list", list);
};

const getListCookie = () => {
  const listCookie = Cookie.get("list");
  if (listCookie === undefined) {
    return [];
  } else {
    return JSON.parse(listCookie);
  }
};

let queryList = {
  "hubs": [],
  "voice": [],
  "protocol": [],
  "network": []
};

const getInitialQueryParams = async () => {
  const list = getListCookie()
  if (list.length > 0) {
    const data = await fetcher(`/api/list?productId=${list}`)
    if (data) {
      data.forEach(elem => setQueryParams(elem))
    }
  }
}

const setQueryParams = async (item) => {
  if (!item.provides) {
    return
  }
  if (item.provides.hub && queryList.hubs) {
    if (queryList.hubs.includes(item.provides.hub.toString())) {
      return
    } 
    queryList.hubs.push(item.provides.hub.toString())
  }
  if (item.provides.voice) {
    if (queryList.voice.includes(item.provides.voice)) {
      return
    } 
    queryList.voice.push(item.provides.voice)
  }
  if (item.provides.protocol) {
    if (queryList.protocol.includes(item.provides.protocol)) {
      return
    } 
    queryList.protocol.push(item.provides.protocol)
  }
  if (item.provides.network) {
    if (queryList.network.includes(item.provides.network)) {
      return
    } 
    queryList.network.push(item.provides.network)
  }
  console.log(queryList)

  // if (queryList.includes(item)) {
  //   return
  // }
  // queryList.push(item);
  // console.log(queryList)
}

const getQueryParams = () => {
  if (queryList.length === 0) {
    return [];
  } else {
    return queryList;
  }
}


const BuildStateContext = React.createContext();
const BuildDispatchContext = React.createContext();

function buildListReducer(state, action) {
  switch (action.type) {
    case "add": {
      //add items to state and cookies
      return {
        list: [...state.list, action.payload],
      };
    }
    case "remove": {
      //remove items from state and cookies
      // queryList = [];
      queryList.hubs = []
      return {
        list: state.list.filter(item => item !== action.payload),
      };
    }
    default: {
      throw new Error(`Undefined action type: ${action.type}`);
    }
  }
}

function BuildListProvider({ children }) {
  const [state, dispatch] = React.useReducer(buildListReducer, {
    list: getListCookie(),
  });
  return (
    <BuildStateContext.Provider value={state}>
      <BuildDispatchContext.Provider value={dispatch}>
        {children}
      </BuildDispatchContext.Provider>
    </BuildStateContext.Provider>
  );
}

function useListState() {
  const context = React.useContext(BuildStateContext);
  if (context === undefined) {
    throw new Error("useListState must be used within a ListProvider");
  }
  return context;
}

function useListDispatch() {
  const context = React.useContext(BuildDispatchContext);
  if (context === undefined) {
    throw new Error("UseListDispatch must be used within a ListProvider");
  }
  return context;
}

export {
  BuildListProvider,
  useListState,
  useListDispatch,
  setListCookie,
  getListCookie,
  setQueryParams,
  getQueryParams,
  getInitialQueryParams
};
