function Header(props){
    return(
        <div>
            <div className="bg-blue-500 w-full h-20 px-8 flex justify-between items-center">
                <div>
                <h1 className="text-3xl text-white font-bold">NEWS7</h1>
                </div>
                <div>
                <input className="w-72 p-2 rounded-md" type="search" onChange={(e)=>{
                 {
                    if(e.target.value!==""){
                        props.data(e.target.value)
                    }
                    else
                    {
                        props.data("dubai")
                    }
                 }
                 
                }}></input>
            </div>
            </div>
            
        </div>
    )
}

export default Header;