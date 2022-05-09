import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import EditUsers from "./components/EditUser";
import { createContext, useReducer } from "react";

import {initialState ,reducer} from "./reducer/useReducer";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Routes>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/edit/:id" element={<EditUsers />} />
            <Route path="*" element={<h1>No match</h1>} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
