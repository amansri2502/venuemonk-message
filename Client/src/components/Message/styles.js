import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    textHolderRight:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-start',
        borderRadius:'8px',
        backgroundColor:'#DCF8C6',
        marginRight:'10px',
        maxWidth:'50%',
        
    },
    textHolderLeft:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-start',
        borderRadius:'8px',
        backgroundColor:'#EBEBEB',
        marginLeft:'10px',
        maxWidth:'50%',
    },
    name:{
        marginTop:'0px',
        color:'#6eccef',
        padding:'8px',
        display:'inline',

    },
    text:{
        marginTop:'0px',
        padding:'8px',
        paddingTop:'2px',
        marginBottom:'8px',
        color:'#555',
        overflowWrap:'anywhere',
    },
    bubbleContainerRight:{
        display:'flex',
        justifyContent:'flex-end',
        marginTop:'16px',
    },
    bubbleContainerLeft:{
        display:'flex',
        justifyContent:'flex-start',
        marginTop:'16px',
    },
    bubbleContainerCenter:{
        display:'flex',
        justifyContent:'center',
        marginTop:'16px',
    },
    textHolderCenter:{
        display:'flex',
        justifyContent:'center',
        paddingLeft:'16px',
        paddingRight:'16px',
        paddingTop:'8px',
        paddingBottom:'8px',
        borderRadius:'16px',
        backgroundColor:'#e1f3fb',
    },

    messageContainer:{
        height:'80vh',
        overflowY:'auto',
    }


}));

export default useStyles;