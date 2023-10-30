









import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Box, Button } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import './MultiDateCalendar.css';
import Navbar from './Navbar';
import NewsFeed from './NewsFeed';
import {Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

const MultiDateCalendar = ({showNewsFeed,selectedDates,setSelectedDates}) => {
//   const [selectedDates, setSelectedDates] = useState([]);

//   const [showNewsFeed,setShowNewsFeed]=useState(true);

  const handleDateClick = (date) => {
    if (date.getDay() === 0 || date.getDay() === 6) {
      return;
    }

    const newSelectedDates = [...selectedDates];

    const dateIndex = newSelectedDates.findIndex(
      (selectedDate) => selectedDate.toDateString() === date.toDateString()
    );

    if (dateIndex !== -1) {
    //   newSelectedDates.splice(dateIndex, 1);
    newSelectedDates(newSelectedDates.filter((d) => d !== date.toDateString()));
    } else {
      newSelectedDates.push(date);
    }

    setSelectedDates(newSelectedDates);

    
  };
  const handleBookClick = () => {
    console.log('Selected Dates:', selectedDates.map(date => date.toDateString()));
  };


  const navigate = useNavigate();


  return (
    <div style={{ backgroundColor: '#D9DAE9', height: '741px',width:'100vw'}}>
      {/* <Navbar selectedDates={selectedDates}  showNewsFeed={showNewsFeed} setShowNewsFeed={setShowNewsFeed}/> */}
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <h style={{ fontSize: '32px', textAlign: 'left', fontWeight: '500', margin: '50px' }}>
            <span style={{ color: '#0071BA' }}>Plan </span>
            <span>Your Day:</span>
          </h>
          <div className="calendar">
            <Calendar
              onClickDay={handleDateClick}
              tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
              tileClassName={({ date }) =>
                selectedDates.find(
                  (selectedDate) => selectedDate.toDateString() === date.toDateString()
                )
                  ? 'selected'
                  : ''
              }
            />
             
              <Button variant="contained" color="primary" style={{ height: '2vw', width: '1.5vw' }}  onClick={()=>navigate("/deskbooking")}>
                Book
              </Button>
            
          </div>
        </div>
        {/* {showNewsFeed && ( // Conditionally render NewsFeed if showNewsFeed is true
          <div style={{ flex: 1, padding: '20px', maxWidth: '350px', height: '605px', backgroundColor: '#12184c' }}>
            <NewsFeed style={{ height: '840px' }} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MultiDateCalendar;


// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './MultiDateCalendar.css';
// import Navbar from './Navbar';
// import NewsFeed from './NewsFeed';

// const MultiDateCalendar = () => {
//   const [selectedDates, setSelectedDates] = useState([]);
//   const [showNewsFeed, setShowNewsFeed] = useState(false);

//   const handleDateClick = (date) => {
//     if (date.getDay() === 0 || date.getDay() === 6) {
//       return;
//     }

//     const newSelectedDates = [...selectedDates];

//     const dateIndex = newSelectedDates.findIndex(
//       (selectedDate) => selectedDate.toDateString() === date.toDateString()
//     );

//     if (dateIndex !== -1) {
//       newSelectedDates(newSelectedDates.filter((d) => d !== date.toDateString()));
//     } else {
//       newSelectedDates.push(date);
//     }

//     setSelectedDates(newSelectedDates);
//   };

//   const handleNewsFeedToggle = () => {
//     setShowNewsFeed(!showNewsFeed);
//   };

//   return (
//     <div style={{ backgroundColor: '#D9DAE9', height: '741px' }}>
//       <Navbar selectedDates={selectedDates} toggleNewsFeed={handleNewsFeedToggle} />
//       <div style={{ display: 'flex' }}>
//         <div style={{ flex: 1, padding: '20px' }}>
//           <h style={{ fontSize: '32px', textAlign: 'left', fontWeight: '500', margin: '50px' }}>
//             <span style={{ color: '#0071BA' }}>Plan </span>
//             <span>Your Day:</span>
//           </h>
//           <div className="calendar">
//             <Calendar
//               onClickDay={handleDateClick}
//               tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
//               tileClassName={({ date }) =>
//                 selectedDates.find(
//                   (selectedDate) => selectedDate.toDateString() === date.toDateString()
//                 )
//                   ? 'selected'
//                   : ''
//               }
//             />
//           </div>
//         </div>
//         <div
//           style={{
//             flex: 1,
//             padding: '20px',
//             maxWidth: showNewsFeed ? '350px' : '0',
//             width: showNewsFeed ? 'auto' : '0',
//             height: '605px',
//             backgroundColor: '#12184c',
//             transition: 'max-width 0.5s, width 0.5s',
//           }}
//         >
//           <NewsFeed style={{ height: '840px' }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiDateCalendar;
