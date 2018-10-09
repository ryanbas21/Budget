import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

function getModalStyle() {
  const top = 25;
  const left = 25;
  return {
    top: `${top}%`,
    margin: "auto"
  };
}

export default ({ form, onChange }) => (
  <Paper>
    <form style={getModalStyle()} className={form}>
      <TextField
        id="standard-name"
        label="Name"
        onChange={onChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Name"
        onChange={onChange}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Name"
        onChange={onChange}
        margin="normal"
      />
    </form>
  </Paper>
);
