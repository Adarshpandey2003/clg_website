import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Homepage from './pages/Homepage';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
