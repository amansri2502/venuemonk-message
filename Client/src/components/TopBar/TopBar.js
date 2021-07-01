import React from 'react';
import useStyles from './styles.js';
import {Link} from 'react-router-dom';

function TopBar (props){
    const classes = useStyles();
    return(

        <div className={classes.TopBarContainer}>
            <p className={classes.name}>{props.name}</p>
            <Link className={classes.link} to={'/'}>
            <button className={classes.logout}>Logout</button>
            </Link>
        </div>
    );

}

export default TopBar;