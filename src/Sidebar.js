import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";

import './Sidebar.css';
import SidebarChat from "./SidebarChat.js"; 
import db from "./firebase";
import { useStateValue } from "./StateProvider";
// eslint-disable-next-line no-unused-vars
import firebase from "firebase";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
       // eslint-disable-next-line no-unused-vars
       const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        // db from locak firebase.js
        //go to the rooms collection
        //snapchat- take a picture of lister of database inside rooms ,any changes inside it will take am amother snapchat and gives us the new 
        const unSubscribe = db.collection("rooms").onSnapshot((snapshot )=> 
            setRooms(
                snapshot.docs.map((doc) =>({
                // id inside fire base (google)
                id: doc.id,
                data: doc.data(),
                }))
                )
        );

        return () => {
            unSubscribe();
        };
        // the empty [] represents run only once the sidebar component loads
       }, []);

    return (
        <div className="sidebar">
        <div className="Sidebar__header">
         <Avatar src={user?.photoURL}/>
         <div className="Sidebar__headerRight">
         </div>
        </div> 
        <div className="Sidebar__chats">
            <SidebarChat addNewChat/>
            {/* for every room return a side bar chat component*/}
            {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id}
                        name={room.data.name} />   
            ))}
        </div>
        </div>
    );
}

export default Sidebar;
