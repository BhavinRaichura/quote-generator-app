import React, { Suspense, useEffect, useState } from 'react'
import QuoteDisplay from '../container/QuoteDisplay'
import { useDispatch, useSelector } from 'react-redux';
import {addQuote, removeQuote} from '../redux/actions/bookmarkAction'


const Home = () => {
    const [quote, setQuote] = useState({});
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState([])
    const [mark, setMark] = useState(false);
   
    const quotesObj = useSelector(state => state.bookmarkOperationReducer)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchTags = () => {
            fetch("https://api.quotable.io/tags")
                .then(response => response.json())
                .then(data =>{ setTags(data)} )
                .catch(e=> {console.log(e)})
        }
        
        fetchData()
        fetchTags()

    },[])
    
    const fetchData = () =>{
        fetch(`https://api.quotable.io/random${category ? "?tags="+category : ""}`)
        .then(response => response.json())
        .then(data => {
            setQuote(data) ;
            setMark(0);
            if(quotesObj[data._id]===null)
                dispatch(addQuote(data))
        })
        .catch(e=> {console.log(e)}) 
    }
    
    const handleSubmitForm = (e) =>{
        e.preventDefault()
        fetchData()
    }

    
    
    const handleBookmark = (id) => {
        const items = JSON.parse(localStorage.getItem("bookmarkList")) || []
        
        if(mark){ 
            // when quote id is already book marked
            dispatch(removeQuote(id));
            localStorage.setItem("bookmarkList", JSON.stringify( items.filter((item) => item!==id)))
        }
        else{ 
            // when we want to bookmark an quote
            dispatch(addQuote(quote))
            localStorage.setItem("bookmarkList",JSON.stringify([...items, id]))
        }
        setMark(!mark)
    }
    
    

    const Loading = () => <div>loading...</div>
  return (
    <div className=' flex justify-center'>
        <div className=' w-96 max-md:w-5/6'>
            
            <Suspense fallback={<Loading/>}>
                <QuoteDisplay quote={quote} handleBookmark={handleBookmark} mark={mark}/>
            </Suspense>

            <form className=' flex justify-center ' onSubmit={handleSubmitForm}>
                <div className=' w-56 flex flex-col'>
                    <select className='border m-2 p-1 rounded-md ' onChange={(e) => setCategory(e.target.value)} placeholder='select'>
                        <option value="" className='border-2'>Select a tag</option>
                        {
                            tags.map((tag, key)=>
                            <option key={key} value={tag.slug} >{tag.name}</option>
                            )
                        }
                    </select>
                    <button className=' m-2 p-1 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600  rounded-md ' >Next Quote</button>
                </div>
            </form>
    </div>
    </div>
  )
}

export default Home