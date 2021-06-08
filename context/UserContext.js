import {createContext, useContext, useState} from 'react'

export const UserContext = createContext();

export const UserProvider = () => {
    const [userID, setID] = useState(null);
    return (
        <UserContext.Provider value = {[userID, setID]}>
        </UserContext.Provider>
    )
}