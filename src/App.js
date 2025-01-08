import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userlist from "./components/userlist";
import Usertable from "./components/usertable";
import Calculator from "./components/calculator";
import Vote from "./components/vote";
import Incdre from "./components/incdre";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/usertable" element={<Usertable />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/incdre" element={<Incdre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
