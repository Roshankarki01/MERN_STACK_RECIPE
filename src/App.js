import React, { useState } from 'react';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { createContext } from 'react';
// import './App.css';
// import Login from "./component/loginpage";
// import SignUp from './component/signup';
// import FoodCard from './component/foodcard';
import FetchComponent from './config/fetch';


export const Appcontext= createContext();

function App() {
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);

  // const handleLoginClick = () => {
  //   setShowLogin(true);
  //   setShowSignUp(false);
  // };

  // const handleSignUpClick = () => {
  //   setShowLogin(false);
  //   setShowSignUp(true);
  // };
  const client = new QueryClient({
    defaultOptions:  {
      queries :{
        refetchInterval:true,
        refetchOnReconnect:true,
      }
    }
  });

  const [username , setusername] = useState("herald collage")
  
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Appcontext.Provider value={{username,setusername}}>
        {/* <FetchComponent/> */}
        <Contact/>
        {/* {isLoggedIn ? (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Router>
        ) : (
          <Login onLogin={handleLogin} />
        )} */}
        </Appcontext.Provider>
      </QueryClientProvider>
    </div>
};


export default App;
