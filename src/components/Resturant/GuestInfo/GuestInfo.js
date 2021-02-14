import React, { useState } from "react";
import { Button, Container, Paper, TextField } from "@material-ui/core";
import "./GuestInfo.css";
import { getDb } from "../../../lib/Firebase";

export function GuestInfo(prop) {
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitt, updateSubmit] = useState(false);

  var submit = () => {
    console.log(fName + " "+ lName+ " " + email + " " + phone);
    var info = {
        firstName: " ",
        lastName: " ",
        email: "",
        phone: ""
    }
    info.firstName = fName;
    info.lastName = lName;
    info.email = email;
    info.phone = phone;
    getDb().collection("Customers").add(info);
  };

  return (
    <div className={"guestInfo"}>
      <Container maxWidth="lg">
        <Paper>
          <h3 style={{ textAlign: "center" }}>Guest</h3>

          <TextField
            focus={true}
            className="name"
            margin="dense"
            label="First Name"
            fullWidth={false}
            value={fName}
            onChange={(event) => {
              setFName(event.target.value);
            }}
            //autoComplete="email"
            placeholder="Enter First Name"
          />

          <TextField
            focus={true}
            className="name"
            margin="dense"
            label="Last Name"
            fullWidth={false}
            value={lName}
            onChange={(event) => {
              setLName(event.target.value);
            }}
            //autoComplete="email"
            placeholder="Enter Last Name"
          />

          <TextField
            focus={true}
            className="email"
            margin="dense"
            label="Email Address"
            fullWidth={true}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            autoComplete="email"
            placeholder="Enter email"
          />

          <TextField
            focus={true}
            className="email"
            margin="dense"
            label="Phone Number"
            fullWidth={true}
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            autoComplete="email"
            placeholder="Enter phone number"
          />

          <Button onClick={submit}>Submit</Button>
        </Paper>
      </Container>
    </div>
  );
}
