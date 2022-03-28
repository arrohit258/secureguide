import Blog from "./components/MainPage/Blog"
import Header from "./components/Header/Header"
import GetStarted from "./components/GetStarted/GetStarted";
import AllTouristGuides from "./components/alltouristguides/alltouristguides"
import PrimarySearchAppBar from "./components/Navbar/Navbar";
import MediaCard from  "./components/cards/card";
import ChatWindow from "./components/Chatwindow/Chatwindow"
import GuideRegister from "./components/GuideRegister/GuideRegister";
import UserList from "./components/UserList/UserList";
import { Routes, Route, Link } from "react-router-dom";


const sections = [
  { title: 'Historical', url: '#' },
  { title: 'Foodies', url: '#' },
  { title: 'Nature', url: '#' },
  { title: 'Markets', url: '#' },
  { title: 'Malls', url: '#' },
  { title: 'Hotels', url: '#' },
  
];

const App=()=> {
  return (
    <div>
    <PrimarySearchAppBar />
    
    <Routes>
    <Route path="/" element={<GetStarted />} />
    </Routes>
    <Routes>
    <Route path="/alltouristguides" element={<AllTouristGuides />} />
    </Routes>
    <Routes>
    <Route path="/chatwindow" element={<ChatWindow />} />
    </Routes>
    <Routes>
    <Route path="/userlist" element={<UserList />} />
    </Routes>

    </div>

    // <Routes>
    //     <Route path="/"  >
         
    //       <PrimarySearchAppBar />
    //       <AllTouristGuides />
    //     </Route>
    //     <Route path="/1"  >
        
    //       <PrimarySearchAppBar />
    //     </Route>
    //     <Route path="/2"  >
        
    //       <PrimarySearchAppBar />
    //     </Route>
       
    //   </Routes>
    
    
    /* <Blog/> */
  )

  
}

export default App;
