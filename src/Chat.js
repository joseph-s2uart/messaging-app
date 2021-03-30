import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import './Chat.css';
import db from './firebase';
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function Chat() {
    //state created
    //default value is given as empty
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();  
    const [roomName, setRoomName] = useState("");       
    const [messages, setMessages] = useState([]);    
    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useStateValue();        

    useEffect(() => {
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => 
            setRoomName(snapshot.data().name));

            db.collection("rooms").doc(roomId).collection("messages")
            .orderBy("timestamp", "asc").onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
        
    }, [roomId]);


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));    
    }, [roomId]);//this roomId allows to change the avatar of every room

    // function created and passed e as event 
     const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>", input);

        db.collection('rooms').doc(roomId).collection
        ("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");//to cleat the input box on clicking ENTER
    };

    return (
        <div className="chat">
        <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/
        ${seed}.svg`}/>

        <div className="chat__headerinfo">
             <h3 className='chat-room-name'>{roomName}</h3>
                    <p className='chat-room-last-seen'>
                        Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]
                            ?.timestamp?.toDate()
                        ).toLocaleString()}
                    </p>
                </div>

        
        </div>

        <div className="chat__body">
         {messages.map(message => (
                    <p className={`chat__message ${ message.name === user.displayName && 'chat__reciver'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toLocaleString()}</span>
                    </p>
                ))}
            </div>

        <div className="chat__fotter">
        

        {/* To get the the ENTER functionality we use form here */}
        <form>
            <input
            value={input}
            onChange = {(e) => setInput(e.target.value)}
            placeholder="Enter your Message" 
            type="text"
            />
        <button onClick={sendMessage} type="submit">
            
        </button>
        </form>
       
        </div>
        </div>
    );
}

export default Chat
