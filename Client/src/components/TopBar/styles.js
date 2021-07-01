import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    TopBarContainer: {
        width: '100vw',
        backgroundColor: '#00BFA6',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'borderBox',
        margin: '-8px -8px',
    },
    name: {
        color: '#fff',
        fontSize: '24px',
        paddingLeft: '20px',
    },
    logout: {
        width: '5rem',
        height: '2rem',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '1px',
        paddingBottom: '1px',
        backgroundColor: '#fff',
        color: '#000',
        fontFamily: 'Manrope-Regular',
        fontStyle: 'bold',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '16px',
        cursor: 'pointer',
        fontSize: '12px',
        alignItems: 'center',
        '&:hover': {
            boxShadow: '7px 10px 5px -3px rgba(0,0,0,0.22)',
        },
        border: '0px',
        marginRight: '20px',
    },
    link: {
        textDecoration: 'none',
    }

}));

export default useStyles;