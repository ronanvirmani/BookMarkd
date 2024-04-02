import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Annotations from "./pages/Annotations";

function App() {
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
