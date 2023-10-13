import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShelfPageForm from "../ShelfPageForm/ShelfPageForm";
import "./ShelfPage.css";
import ShelfItem from "../ShelfItem/ShelfItem";

export default function ShelfPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS" });
  }, []);

  const itemList = useSelector((store) => store.itemsReducer);
  console.log("itemList in shelfPage", itemList);

  

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfPageForm />
      <ul>
        {itemList.map((item) => (
          <ShelfItem key={item.id} item={item}/>
        ))}
      </ul>
    </div>
  );
}


//   return (
//     <div className="container">
//       <h2>Shelf</h2>
//       <ShelfPageForm />
//       <ul>
//         {itemList.map((item) => {
//           return ( <>
//           {/*edit feature */}
//     {edit ? (
 
//   <li>
//     <input
//       type="text"
//       value={editDescription}
//       onChange={(e) => setEditDescription(e.target.value)}
//     />
//     <button className="editBtn" onClick={handleEdit}>
//       Cancel
//     </button>
//     <button onClick={saveEdit}>Save</button>
//     </li>

// ) : (

//     < li key={item.id}>
//       {item.description} {item.image_url}
    
//     <button className="editBtn" onClick={handleEdit}>
//       Edit
//     </button>

// )}

//               {item.user_id && ( // Check if user.id exists
//                 <button onClick={() => dispatch({ type: "DELETE_ITEM", payload: item.id })}>
//                   Delete
//                 </button>
                
//               )}
//              <button onClick={() => dispatch({ type: "EDIT_ITEM", payload: item.id })}>
//              Edit
//            </button>
//             </li>
//             </>
//           );
//         })}
//       </ul>
//     </div>
//   )};
     
// }



// {userID || <div>This div will render if userID is falsy.</div>}



//   return (
//     <div className="container">
//       <h2>Shelf</h2>
//       <ShelfPageForm />
//       <ul>
//         {itemList.map((item) => {
//           return (
//             <li key={item.id}>
//               {item.description} {item.image_url}
//               <button
//                 onClick={() =>
//                   dispatch({ type: "DELETE_ITEM", payload: item.id })
//                 }
//               >
//                 Delete
//               </button>{" "}
//             </li>
//           ); //double check what the object looks like
//         })}
//       </ul>
//     </div>
//   );
// }
