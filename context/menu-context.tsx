import React, { useState, useContext } from "react";

export const MenuContext = React.createContext(
  {} as {
    currentUser: boolean;
    setCurrentUser: (currentUser: boolean) => void;
  }
);

export const MenuProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<boolean>(false);

  return (
    <MenuContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
