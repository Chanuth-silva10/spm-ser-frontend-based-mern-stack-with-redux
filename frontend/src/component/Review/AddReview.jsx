import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const AddReview = () => {
  const [review, setReview] = useState("");
  return (
    <>
      <div className="top">
        <button>Add</button>
        <button>View</button>
      </div>
      <div className="bottom">
        <TextField></TextField>
      </div>
    </>
  );
};

export default AddReview;
