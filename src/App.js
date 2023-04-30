import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";



function App() {
const [apod, setApod] = useState();
const [yuklendi, setYuklendi] = useState(false);

const fetchApod = () => {
  setYuklendi(false)
  axios.get('https://api.nasa.gov/planetary/apod', {
  params: {
    api_key: "p1vmHHoiFuePNTinRvqsDepmRxlRt0BSLwboliEc",
    date: "2023-04-26",
    thumbs: true,
  }
})
.then(function (response) {
  console.log(response);
  setApod(response.data);
  setYuklendi(true);
})
.catch(function (error) {
  console.log(error);
  setYuklendi(false);

})
.finally(function () {
  
}); 
}
useEffect(() => {
  fetchApod("2022-04-27");
}, []);

  return (
  
    <div className="App">
    {yuklendi && (
      <div>
       <p>{apod.date}</p>
       <p>{apod.explanation}</p>
       <img src={apod.hdurl} />
       <p>{apod.media_type}</p>
       <p>{apod.service_version}</p>
       <h1>{apod.title}</h1>
       <img src={apod.url}/>
      </div>
    )}
    <span role="img" aria-label='go!'>🚀</span>!
    </div>
  );
}

export default App;
