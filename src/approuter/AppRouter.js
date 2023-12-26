import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { DayPlanner } from "../pages/DayPlanner";
import { DietPlanner } from "../pages/DietPlanner";

export const AppRouter = () => {
  return <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="home" index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="day-planner" element={<DayPlanner />} />
        <Route path="diet-planner" element={<DietPlanner />} />
      </Routes>
};
