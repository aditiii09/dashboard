import { useState } from "react";
import "./App.css";

import MultiDateCalendar from "./components/MultiDateCalendar";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeskBooking from "./components/DeskBooking";
import CabBooking from "./components/CabBooking";

function App() {
  const [showNewsFeed, setShowNewsFeed] = useState(true);
  const [selectedDates, setSelectedDates] = useState([]);

  return (
    <BrowserRouter>
    <div>
      <Navbar
        selectedDates={selectedDates}
        showNewsFeed={showNewsFeed}
        setShowNewsFeed={setShowNewsFeed}
      />

      <div className="App" style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flex: 1,justifyContent:'space-between',width:'100vw'
          }}
        >
          <Routes>

            <Route path="/" element={<MultiDateCalendar
            showNewsFeed={showNewsFeed}
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
          />}/>
          <Route path="/deskbooking" element={<DeskBooking/>}/>
          <Route path="/cabbooking" element={<CabBooking/>}/>
          </Routes>
          
          {showNewsFeed && (
            <div
              style={{
                width: "350px",
                backgroundColor: "#12184c",
                overflowY: "auto",
              }}
            >
              <NewsFeed style={{ height: "100%" }} />
            </div>
          )}
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
