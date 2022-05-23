import React from 'react';

const UserContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'set': {
      const isAdmin = action.userData.email.split("@")[0] === "user2" ? true : false
      const demoDataToSave = JSON.stringify({email:action.userData.email,token:action.userData.token,admin:isAdmin})
      localStorage.setItem("demoUserData",demoDataToSave)
      localStorage.setItem("userToken",action.userData.token)
      return {email:action.userData.email,token:action.userData.token,admin:isAdmin}
    }
    case 'delete': {
      localStorage.removeItem("demoUserData")
      localStorage.removeItem("userToken")
      return {email:undefined,token:undefined,admin:undefined}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({children}) {
  const demoSavedData = localStorage.getItem("demoUserData") 
  const token = localStorage.getItem("userToken")

  const {email,admin} = !token ? {email:undefined,token:undefined,admin:undefined} : JSON.parse(demoSavedData)
  const userData = {email:email,admin:admin,token:token}

  const [state, dispatch] = React.useReducer(userReducer, userData)

  const value = {state, dispatch}
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUserData() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserData must be used within a userProvider')
  }
  return context
}

export {UserProvider, useUserData}