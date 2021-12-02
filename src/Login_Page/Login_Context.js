import React, { createContext, useState } from "react";

export const AppContext = createContext();

function Context(props) {
  const [currentUser, setCurrentUser] = useState([
    // { id: 9 },
    // { LoginCode: 13 },
    // { Used_Pin: 12344 },
  ]);

  const [currentUserPin, setCurrentUserPin] = useState("9999");

  return (
    <AppContext.Provider
      value={{
        UserObject: currentUser,
        UserPin: currentUserPin,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default Context;
