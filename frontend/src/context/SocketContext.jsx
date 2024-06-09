import { createContext, useContext, useEffect, useState } from "react";
import {io} from "socket.io-client";
import { useAuthContext } from "./AuthContext";


const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) => {

  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([])
  const {authUser} = useAuthContext();

  useEffect(() => {
    if(authUser){
      console.log("Establishing socket connection...")
      const socket = io('http://localhost:8000', {
        query: {
          userId: authUser._id,
        },
        transports: ['websocket'],
      });
      
      // const socket = new WebSocket('ws://localhost:8000')

      setSocket(socket);

      socket.on("connect", () => {
        console.log("Socket connected:", socket.id);
      });

      // socket.on is used to listen the events, can be used both from the client and the server
      // socket.on("getOnlineUsers", (users) => {
      //   setOnlineUsers(users);
      //   console.log("Online users:", users);
      // })

      socket.on("disconnect", (reason) => {
        console.log("Socket disconnected:", reason);
      });

      return () => {
        console.log("Closing socket due to missing authUser...");
        socket.close();
        setSocket(null);
      }
    }else{
      if(socket){
        socket.close();
      }
    }
  }, [authUser])

  return (
    <SocketContext.Provider value={{socket, onlineUsers}}>
      {children}
    </SocketContext.Provider>
  )
}