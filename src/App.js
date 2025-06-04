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
import LiveCharCount from "./components/livecharcount";
import PersistForm from "./components/persistform";
import TimerApp from "./components/timerapp";
import MultiStepForm from "./components/multistepform";
import Accordion from "./components/accordion";
import Tabs from "./components/tabs";
import ImageGallery from "./components/imagegallery";
import ModalExample from "./components/modal";
import { ThemeProvider } from "./components/themecontext";
import ThemeToggle from "./components/themetoggle";
import Table from "./components/table";
import ImageUploadPreview from "./components/imageuploadpreview";

function App() {
  const accordionData = [
    { title: "Section 1", content: "Content 1" },
    { title: "Section 2", content: "Content 2" }
  ];

  const tabsData = [
    { label: "Tab 1", content: "Content 1" },
    { label: "Tab 2", content: "Content 2" }
  ];

  const images = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/201",
    "https://via.placeholder.com/202"
  ];

  const sampleData = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
  ];

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
          <Route path="/lcc" element={<LiveCharCount />} />
          <Route path="/persist" element={<PersistForm />} />
          <Route path="/timer" element={<TimerApp />} />
          <Route path="/multi" element={<MultiStepForm />} />
          <Route path="/accordion" element={<Accordion data={accordionData} />} />
          <Route path="/tabs" element={<Tabs tabs={tabsData} />} />
          <Route path="/gallery" element={<ImageGallery images={images} />} />
          <Route path="/modal" element={<ModalExample />} />
          <Route path="/tabs" element={<Tabs tabs={tabsData} />} />
          <Route path="/gallery" element={<ImageGallery images={images} />} />
          <Route path="/modal" element={<ModalExample />} />
          <Route path="/tt" element={<ThemeToggle />} />
          <Route path="/table" element={<Table data={sampleData} />} />
          <Route path="/preview" element={<ImageUploadPreview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
