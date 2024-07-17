import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contest from './Components//Pages/Challanges/Contest';
import Landingpage from "./Components/Landingpage";
import Navbar from "./Components/Navbar/Navbar";
import Explorework from "./Components/Pages/Explorework/Explorework";
import Profiles from './Components/Pages/HireTalent/Profiles';
import Signin from './Components/Pages/GetStarted/Signin';
import ViewProfile from "./Components/Pages/HireTalent/ViewProfile";
import Toast from './features/Toast';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/explorework" element={<Explorework />} />
          <Route path="/hiretalent" element={<Profiles />} />
          <Route path="/hiretalent/:userID" element={<ViewProfile />} />
          <Route path="/getstarted" element={<Signin />} />
          <Route path="/challanges" element={<Contest />} />
          <Route path="*" element={<h1> Not Found</h1>} />
        </Routes>
      </AnimatePresence>
      <Toast></Toast>
    </>
  );
}

export default App;
