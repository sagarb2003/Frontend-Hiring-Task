import EmployeeList from "./components/EmployeeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import GetEmployeeDetail from "./components/GetEmployeeDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router</h1>
        {/* //navbar */}
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
