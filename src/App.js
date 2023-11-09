import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Bookmarks from './components/Bookmarks';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { addAllQuoteId } from './redux/actions/bookmarkAction';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const bookmarkList =  JSON.parse(localStorage.getItem("bookmarkList")) || [];
    dispatch(addAllQuoteId(bookmarkList));
  },[])
  
  return (
    <Router>
      <Navbar/>
      <div className="App  my-10 py-10 ">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/bookmarks' element={<Bookmarks/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
