import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import TopBar from '../TopBar/TopBar';
import InputField from '../InputField/inputField';
import MessageComponent from '../Message/Message';
import useStyles from './styles.js';

let socket;

function Chat(props) {
    const [name, setName]=useState('');
    const [room, setRoom]=useState('');
    const [message, setMessage]=useState('');
    const [messages, setMessages]=useState([]);
    const classes = useStyles();
    const ENDPOINT='https://react-room-application.herokuapp.com/';
    // const ENDPOINT='localhost:5000';
    useEffect(()=>{
        const {name,room}=queryString.parse(props.location.search);
        setName(name);
        setRoom(room);

        socket=io(ENDPOINT);
        socket.emit('join',{name,room},(error)=>{
            if(error)
            props.history.push('/');
        });
        return ()=>{
            socket.disconnect();
            socket.off();
        }
    },[ENDPOINT,props.history, props.location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message]);
        })
    },[messages]);

    const sendMessage=(event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>{
                setMessage('');
            });
        }
    }
    console.log(messages);

    return (
        <div className={classes.chatContainer}>
        <TopBar name={name}/>
        <MessageComponent className={classes.message} messages={messages} name={name}/>
        <InputField message={message} sendMessage={sendMessage} setMessage={setMessage}/>
        </div>
    );
}

export default Chat;