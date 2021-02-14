import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

import { Button, Container, Paper, TextField } from "@material-ui/core";
import { GuestInfo } from "./GuestInfo/GuestInfo";
import "./Restaurant.css";


export function Restaurant() {
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [guestList, setGuestList] = useState([]);

  {
      
  }

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Guest Info</h1>

      <h2>Number of Guests : {numOfGuests}</h2>
      <Button
        onClick={() => {
          console.log("CLICKED");
          var x = guestList.map((y) => y);
          x.push(<GuestInfo />);
          setGuestList(x);
          setNumOfGuests(numOfGuests + 1);
          console.log(guestList);
        }}
      >
        Add
      </Button>

      <Button
        onClick={() => {
          console.log("CLICKED");
          var x = guestList.map((y) => y);
          x.pop();
          setGuestList(x);
          setNumOfGuests(numOfGuests - 1);
          console.log(guestList);
        }}
      >
        Sub
      </Button>

      {guestList}

      <Button
        onClick={() => {
          console.log(guestList);
          guestList.map((guest) => {
            console.log(guest);
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
}
