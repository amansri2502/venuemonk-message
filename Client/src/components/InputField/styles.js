import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    inputBox:{
        border:'2px solid #00BFA6',
        width:'90vw',
        height:'5.5vh',
        borderRadius:'16px',
        '&:focus':{
            outline:'none',
        },
        boxSizing:'borderBox',
        paddingLeft:'16px',
        marginLeft:'16px',
    },
    sendButton:{
        width: '6rem',
        height: '5.5vh',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '1px',
        paddingBottom: '1px',
        backgroundColor: '#00BFA6',
        color: '#fff',
        fontFamily: 'Manrope-Regular',
        fontStyle: 'bold',
        borderRadius: '16px',
        cursor: 'pointer',
        fontSize: '16px',
        alignItems: 'center',
        border: '0px',
        marginRight: '20px',
        marginLeft:'10px',

    },
    messageHolder:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    }

}));

export default useStyles;