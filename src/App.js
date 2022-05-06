import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import Signup from "./components/Signup";
import Login from './components/Login';
import Header from "./components/Header";
import EditUsers from "./components/EditUser";

function App() {
	return (
		// <div className="container-fluid bg-dark bg-gradient text-dark d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
			<Router>
        < Header />
				<Routes>
					<Route index element={<Login />} />
					<Route path="/signup" element={<  Signup />} />
					<Route path="/allusers" element={< AllUsers/>} />
          <Route path="/edit" element={< EditUsers/>} />
					<Route path="*" element={<h1>No match</h1>} />
				</Routes>
			</Router>
		// </div>
	);
}

export default App;