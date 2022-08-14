import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';

interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(0deg, rgba(214,153,7,1) 0%, rgba(121,92,9,1) 32%, rgba(205,179,57,1) 100%)`,
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
});

export const Home = (props: Props) => {
    
    const classes = useStyles();
    
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <Button>
                    <Link to='/phonebook' className={classes.button_text}>Take me to my Collection</Link>
                    </Button>
                </div>
        </div>
        </>
  )
}

