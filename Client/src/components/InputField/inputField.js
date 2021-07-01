import React from 'react';
import useStyles from './styles.js';


function InputField(props) {
    const classes = useStyles();
    return (
        <div className={classes.messageHolder}>
            <input className={classes.inputBox} placeholder='Add Text...'
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Add Text"} type='text'
                onChange={(e)=>props.setMessage(e.target.value)}
                value={props.message}>
            </input>
            <button onClick={(e)=>{props.sendMessage(e)}}className={classes.sendButton}>send</button>
        </div>
    );

}

export default InputField