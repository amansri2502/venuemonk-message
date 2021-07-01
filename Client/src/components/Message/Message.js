import React from 'react';
import useStyles from './styles.js';
import ScrollToBottom from 'react-scroll-to-bottom';

function Message (props){
    const classes = useStyles();
    const myMessage=(item,i)=>{
        return(
            <div className={classes.bubbleContainerRight} key={i}>
                <div className={classes.textHolderRight}>
                    <div className={classes.name}>{item.user}</div>
                    <div className={classes.text}>{item.text}</div>
                </div>
            </div>
        );

    }
    const friendMessage=(item,i)=>{
        return(
            <div className={classes.bubbleContainerLeft} key={i}>
                <div className={classes.textHolderLeft}>
                    <div className={classes.name}>{item.user}</div>
                    <div className={classes.text}>{item.text}</div>
                </div>
            </div>
        );

    }

    const adminMessage=(item,i)=>{
        return(
            <div className={classes.bubbleContainerCenter} key={i}>
                <div className={classes.textHolderCenter}>
                    <div className={classes.centertext}>{item.text}</div>
                </div>
            </div>
        );

    }

    return(
        <ScrollToBottom>
            <div className={classes.messageContainer}>
            {props.messages.map((item,i)=>{
                if(props.name===item.user){
                     return myMessage(item,i);
                }else if(item.user==='admin'){
                    return adminMessage(item,i);
                }else{
                    return friendMessage(item,i);
                }
            })}
            </div>
        </ScrollToBottom>
    );


}

export default Message;