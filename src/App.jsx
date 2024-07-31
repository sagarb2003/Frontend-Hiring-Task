import EmployeeList from "./components/EmployeeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router</h1>
        //navbar
        <Routes>
          <Route path="/" element={<EmployeeList />} exact />
          <Route path="/create" element={<EmployeeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
