import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userlist from "./components/userlist";
import Usertable from "./components/usertable";
import Child from "./components/child";
import Parent from "./components/parent";
import Calculator from "./components/calculator";
import Incdre from "./components/incdre";
import MFR from "./components/mfr";
import TodoList from "./components/todolist";
import AutoCounter from "./components/autocounter";
import DarkModeToggle from "./components/darkmodetoggle";
import DisableButton from "./components/disablebutton";
import Dropdown from "./components/dropdown";
import FormValidation from "./components/formvalidation";
import TogglePassword from "./components/togglepassword";
import ToggleParagraph from "./components/toggleparagraph";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/usertable" element={<Usertable />} />
          <Route path="/child" element={<Child />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/incdre" element={<Incdre />} />
          <Route path="/mfr" element={<MFR />} />
          <Route path="/to-do" element={<TodoList />} />
          <Route path="/counter" element={<AutoCounter />} />
          <Route path="/dark-mode" element={<DarkModeToggle />} />
          <Route path="/disable-button" element={<DisableButton />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/form-validation" element={<FormValidation />} />
          <Route path="/toggle-paragraph" element={<ToggleParagraph />} />
          <Route path="/toggle-password" element={<TogglePassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
