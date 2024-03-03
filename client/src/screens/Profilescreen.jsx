import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

function Profilescreen() {
  

  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 mt-5 ml-5"
      >
        <Tab eventKey="home" title="Booking" className="mb-3 mt-5 ml-5">
          <Booking />
        </Tab>
       
      </Tabs>
    </div>
  );
}

export default Profilescreen;

export function Booking() {
   
    



    return <div>
      
        


  </div>;
}
