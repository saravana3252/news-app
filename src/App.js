
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';
import Header from './Header';




function App() {

let [newsData,setnewsData]=useState([])
let [category,setCategory]=useState("dubai")


function updateCategory(category){
  setCategory(category)
}

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-12-02&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then((response)=>response.json())
    .then((data)=>{
      setnewsData(data.articles)
      console.log(newsData)
    })
  },[category])
  return (
    <div className="App">
      <Header data={updateCategory}></Header>
      <div className='font-bold text-2xl pt-2 px-2 italic bg-gray-100'>NEWS CATEGORY: <span className='font-normal'>{category}</span></div>
      <div className='p-5 grid grid-cols-2 gap-5 bg-gray-100 md:grid-cols-3 md:gap-10 md:p-10'>
    {
      newsData.length!==0?
      newsData.map((data)=>{
        return <News data={data}></News>
      }):<p>SEARCH NOT FOUND</p>
    }
     </div>
    </div>
  );
}

export default App;
