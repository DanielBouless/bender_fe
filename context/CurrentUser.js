import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
      const getLoggedInUser = async () => {
        const response = await fetch(`http://172.29.128.1:5050/users/user`, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
          },
        });
        const user = await response.json();
        setCurrentUser(user);
      };
      getLoggedInUser();

  }, []);

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}

export default CurrentUserProvider;








