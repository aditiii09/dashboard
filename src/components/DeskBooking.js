import { Button } from '@mui/material'
import React from 'react'
import {useNavigate} from "react-router-dom" 

const DeskBooking = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={()=>navigate("/cabbooking")}>next</Button>
    </div>
  )
}

export default DeskBooking