import React, { useState } from 'react';
import './App.css';
import Login from "./component/loginpage";
import SignUp from './component/signup';
import FoodCard from './component/foodcard';

// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true);
//     setShowSignUp(false);
//   };

//   const handleSignUpClick = () => {
//     setShowLogin(false);
//     setShowSignUp(true);
//   };

//   return (
//     <>
//       <div className="login">
//         <button onClick={handleLoginClick}>login</button>
//       </div>
//       <div className="signup">
//         <button onClick={handleSignUpClick}>signup</button>
//       </div>
//       {showLogin && <Login />}
//       {showSignUp && <SignUp />}
//     </>
//   );
// }
return(
  <>
  <FoodCard/>
  </>
)

export default App;
