import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";

export default function ShelfPageForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newDescription, setNewDescription] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [addedImageUrl, setAddedImageUrl] = useState(""); // Added state for displaying added image URL

  const handleClick = () => {
    console.log("Clicked ADD!");

    // Define the action creator for dispatch
    const addItem = (newItem) => ({
      type: "ADD_ITEM",
      payload: newItem,
    });
    // Object to send
    const newItem = {
      description: newDescription,
      image_url: newImageUrl,
    };
    // Dispatch the action
    dispatch(addItem(newItem));
   
    // Display the added image URL
    setAddedImageUrl(newImageUrl);

    setNewDescription("");
    setNewImageUrl(""); // Clear the input field

    alert("Added Item!");
  };



  return (
    <Card className="form-card">
      <CardContent>
        <form>
          <FormControl fullWidth>
            <TextField
              className="form-control"
              placeholder="Add Item"
              variant="outlined"
              required
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <TextField
              className="form-control"
              placeholder="Image URL"
              variant="outlined"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
            />
          </FormControl>
          <br />
          <br />

          <Button onClick={() => history.push("/shelf")}>Cancel</Button>
          <Button onClick={handleClick} variant="contained">
            Add Item
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
