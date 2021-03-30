/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { Avatar } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState} from "react";
import './SidebarChat.css';
import db from "./firebase";
import { Link } from "react-router-dom";

// passing a prob to contionally render this component
function SidebarChat({ id, name, addNewChat }) {
    // state inside react - like variable
    const [seed, setSeed] = useState("");
     const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);
    // useEffect(it will run some code when a component loads) is hook inside react
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));    
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter the Name of the Group");
        if (roomName) {
            //we are getting the room name as input(which is stored in roomName)
            // and we are assigning it to the database
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };
    // if the addNewChat is not clicked  so the normal stuff otherwise run the function createChat()
    return !addNewChat ?  (
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/
            ${seed}.svg`}/>
            <div className='sidebarChat__info'>
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ): (
       <div onClick={createChat}
           className="sidebarChat">
               <h2>Create a new Group</h2>
       </div>
    );
}

export default SidebarChat
