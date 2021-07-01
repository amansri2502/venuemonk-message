import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '40vh',
  },
  holder: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  headingHolder: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3.5rem',

  },
  heading: {
    fontFamily: 'Manrope-Regular',
    fontStyle: 'normal',
    fontSize: '16px',
  },
  nameHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textfieldHolder: {
    width: '90vw',
  },
  name: {
    width: '70%',
    marginBottom: '1rem',
  },
  headingText: {
    fontSize: '2rem',
    color: '#00BFA6',
  },
  button:{
    width:'6rem',
    height:'3rem',
    marginTop:'5vh',
    paddingLeft:'16px',
    paddingRight:'16px',
    paddingTop:'2px',
    paddingBottom:'2px',
    backgroundColor:'#00BFA6',
    color:'#fff',
    fontFamily: 'Manrope-Regular',
    fontStyle: 'bold',
    display:'flex',
    justifyContent:'center',
    borderRadius:'32px',
    cursor:'pointer',
    fontSize:'20px',
    alignItems:'center',
    '&:hover': {
      boxShadow:'7px 10px 5px -3px rgba(0,0,0,0.22)'
   },
   border:'0px',
  },
  link:{
    textDecoration:'none',
  }

})
);

export default useStyles;