import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@mui/material";

export default function ShelfItem({ item }) {
  const dispatch = useDispatch();

  const [editDescription, setEditDescription] = useState(item.description);
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!edit);
  }
  console.log("edit description:", editDescription);
  console.log("item:", item);

  const saveEdit = (item) => {
    console.log("clicked saveEdit");
    setEdit(false);
    dispatch({ type: "EDIT_ITEM", payload: item });
  };

  return (
    <li>
      {edit ? ( // Use editedItemId to check if an item is being edited
        <div>
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <button className="editBtn" onClick={() => saveEdit(item)}>
            Save
          </button>
          <button className="editBtn" onClick={() => handleEdit(null)}>
            {" "}
            {/* Cancel editing */}
            Cancel
          </button>
        </div>
      ) : (
        <div>
           Item: {item.description} <br />
        <br />
        <img src={item.image_url} alt="no image :("></img>
        <br />
        <br />
        </div>
      )}

      {/* <li key={item.id} className="list">
        Item: {item.description} <br />
        <br />
        <img src={item.image_url} alt="no image :("></img>
        <br />
        <br />
        
      </li> */}

      {item.user_id && ( // Check if user.id exists
          <Button
            onClick={() => dispatch({ type: "DELETE_ITEM", payload: item.id }) + alert('Deleted Item!')}
            variant="contained"
            style={{ backgroundColor: "crimson" }}
          >
            Delete
          </Button>
        )}

      <Button variant="contained" onClick={() => handleEdit()} style={{marginLeft: "10px"}}>Edit</Button>
      <br />
      <br />
    </li>
  );
}
