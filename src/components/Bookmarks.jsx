import React, { useEffect, useState } from "react";
import QuoteDisplay from "../container/QuoteDisplay";
import { useDispatch, useSelector } from "react-redux";
import { removeQuote, addQuote } from "../redux/actions/bookmarkAction";



const Bookmarks = () => {
  const dispatch = useDispatch();
  const quotesObj = useSelector(
    (state) => state.bookmarkOperationReducer || {}
  );

  const [markedIds, setMarkedIds] = useState(
    JSON.parse(localStorage.getItem("bookmarkList")) || []
  );
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = (id) => {
      fetch(`https://api.quotable.io/quotes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setItems((e) => {
            dispatch(addQuote(data));
            return [...e, data];
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    
      markedIds.forEach((id) => {
        if (quotesObj[id] === null || quotesObj[id] === undefined)
          fetchData(id);
        else {
          setItems((e) => [...e, quotesObj[id]]);
        }
      });
    
    return ()=>{
      setItems([]);
    }
  }, []);

  const handleBookmark = (id) => {
    const bookmarkIdList =
      JSON.parse(localStorage.getItem("bookmarkList")) || [];
    dispatch(removeQuote(id));
    localStorage.setItem(
      "bookmarkList",
      JSON.stringify(bookmarkIdList.filter((quoteId) => quoteId !== id))
    );
    
    setItems((e) => e.filter((item) => item._id !== id));
  };

  return (
    <div className="flex justify-center ">
      <div className="w-96 max-md:w-5/6">
        {items.map((item, key) => (
          <QuoteDisplay
            key={key}
            quote={item}
            mark={1}
            handleBookmark={handleBookmark}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
