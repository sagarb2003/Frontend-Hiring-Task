import EmployeeList from "./components/EmployeeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import GetEmployeeDetail from "./components/GetEmployeeDetail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<EmployeeList />} exact />
          <Route path="/create" element={<EmployeeForm />} />
          <Route path="/:id" element={<GetEmployeeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
