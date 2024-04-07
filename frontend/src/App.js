import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Annotations from "./pages/Annotations";

function App() {
    // API key - needs to be moved somewhere
    const key = "AIzaSyDVQk5ZQq13AmgRi4YXyhTJg8yo7tOsYNc";

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="annotations" element={<Annotations />} />
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
