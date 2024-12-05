function News(props){
    return(
    <div>
      <div className=" bg-gray-200 p-2 overflow-hidden">
        <div className="h-2/4 ">
        {
            props.data.urlToImage!==null? <img src={props.data.urlToImage} className="h-full w-full" alt="news img"></img>: <img src="https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png" className="h-full w-full"></img>
        }
           
        </div>
        <p className="font-bold text-md pt-2 px-2">{props.data.title}</p>
        <p className="text-sm pt-1 px-2">{props.data.description?.substring(0,100).concat("...")}<a href={props.data.url} className="text-blue-600">read more</a></p>
        <div className="flex justify-between font-thin text-sm pt-2 px-2">
            <p>{props.data.author}</p>
            <p>{props.data.source.name}</p>
        </div>
      </div>
    </div>
    )
}

export default News;