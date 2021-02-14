import React, { useState } from "react";
import { Button, Container, Paper, TextField } from "@material-ui/core";
import "./GuestInfo.css";

export function GuestInfo(prop) {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  var submit = () => {
    console.log(name + " " + email);
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
            label="Name"
            fullWidth={false}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            //autoComplete="email"
            placeholder="Enter Name"
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
            placeholder="Placeholder"
          />

          <Button onClick={submit}>Submit</Button>
        </Paper>
      </Container>
    </div>
  );
}
