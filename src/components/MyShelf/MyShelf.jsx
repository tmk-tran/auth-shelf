import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ShelfPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MY_SHELF" });
  }, []);

  const itemList = useSelector((store) => store.myItemsReducer);
  console.log("itemList in shelfPage", itemList);





  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        {itemList.map((item) => {
          return (
            <li key={item.id}>
              {item.description} {item.image_url}
            </li>
          );
        })}
      </ul>
    </div>
  );
     
}

