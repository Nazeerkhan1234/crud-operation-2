import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateStudent from "./pages/student/CreateStudent";
import CreateTeacher from "./pages/teacher/CreateTeacher";

function App() {
  return (
    < >
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="teacher/create" element={<CreateTeacher/>}></Route>
      <Route path="student/create" element={<CreateStudent/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
