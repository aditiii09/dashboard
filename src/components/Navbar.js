




import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import './Navbar.css';
import cme from '../assets/cmeLogo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

library.add(faUser, faNewspaper);

const Navbar = ({showNewsFeed,setShowNewsFeed }) => {

    // const [showNewsFeed,setShowNewsFeed]=useState(true);
    const handleNewsFeed =() =>{
        setShowNewsFeed(!showNewsFeed);
        console.log("newsFeed",showNewsFeed);
        // return showNewsFeed;
    }

    // useEffect(()=>{
    //     return showNewsFeed
    // },[showNewsFeed])



  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5vw',
        backgroundColor: 'white',
      }}
    >
      <div>
        <img src={cme} alt="CME Logo" style={{ width: '18vw', padding: '0.5vw' }} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        
        <FontAwesomeIcon icon={faNewspaper} size="2x" style={{ paddingLeft: '2vw', height: '1.5vw', width: '1.5vw' }} onClick={handleNewsFeed} />
        <FontAwesomeIcon icon={faUser} size="2x" style={{ padding: '2vw', height: '1.5vw', width: '1.5vw' }} />
      </div>
    </Box>
  );
};

export default Navbar;



