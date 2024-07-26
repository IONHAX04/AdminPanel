import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/00-Navbar/Nav";
import Dashboard from "./Components/01-Dashboard/Dashboard";
import Employees from "./Components/02-Employees/Employees";
import Settings from "./Components/03-Settings/Settings";


import { useNavigate } from "react-router-dom";


import "./App.css"; 

function App() {
  return (
    <>
      <div>
          <Router>
            <Nav>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee" element={<Employees />} />
                <Route path="/employee/*" element={<EmployeesRouting />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Nav>
          </Router>
      </div>
    </>
  );
}

function EmployeesRouting() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Employees navigate={navigate} />} />
      <Route path="/add" />
    </Routes>
  );
}

export default App;
