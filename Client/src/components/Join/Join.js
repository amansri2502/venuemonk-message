import React, {useState} from 'react';
import { ReactComponent as HeroImage } from "../../assets/hero.svg";
import useStyles from './styles.js';
import {TextField, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';


function Join(props) {
    const classes = useStyles();
    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    return (
        <>
            <div className={classes.holder}>
                <div className={classes.image}><HeroImage className={classes.svg} /></div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.textfieldHolder} >
                    <div className={classes.headingHolder}>
                        <Typography className={classes.headingText}> JOIN NOW</Typography>
                    </div>
                    <div className={classes.nameHolder}>
                        <TextField
                            className={classes.name}
                            autoFocus
                            label={'Name'}
                            onChange={(event)=>{setName(event.target.value)}}
                            value={name}
                            inputProps={{
                                maxLength: 20,
                                style: { fontFamily: 'Manrope-Regular', fontSize: '16px', color: '#000000' },
                            }}
                            InputLabelProps={{ style: { fontSize: '16px', fontFamily: 'Manrope-Regular', color: '#000000' } }}
                        />
                        <TextField
                            className={classes.name}
                            label={'Room Id'}
                            onChange={(event)=>{setRoom(event.target.value)}}
                            value={room}
                            inputProps={{
                                maxLength: 20,
                                style: { fontFamily: 'Manrope-Regular', fontSize: '16px', color: '#000000' },
                            }}
                            InputLabelProps={{ style: { fontSize: '16px', fontFamily: 'Manrope-Regular', color: '#000000' } }}
                        />
                            <Link className={classes.link} onClick={event=>(!name||!room?event.preventDefault():null)} to ={`/chat?name=${name}&room=${room}`}>
                                <button className={classes.button} type='submit'>Enter</button>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Join;