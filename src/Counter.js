import React from "react";
import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // setCount(10);
        console.log("You changed the count to " + count);
      }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default Counter;
/*function searchMovies(title) {
 var requestOptions = {
    method: 'GET',
    redirect: 'follow'
 };

 fetch("http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=" + title, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.Error) {
        console.log("Error:", result.Error);
      } else {
        console.log("Movies found:", result.Search);
      }
    })
    .catch(error => console.log('error', error));
}

// Call the function with the desired movie title
searchMovies("The Shawshank Redemption");*/