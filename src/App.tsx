import { Routes, Route, Navigate } from "react-router-dom";
import MarketingLayout from "./components/MarketingLayout";
import AppLayout from "./components/AppLayout";

import Home from "./pages/marketing/Home";
import Features from "./pages/marketing/Features";
import TripPlannerMarketing from "./pages/marketing/TripPlanner";
import Family from "./pages/marketing/Family";
import Banks from "./pages/marketing/Banks";
import Pricing from "./pages/marketing/Pricing";
import About from "./pages/marketing/About";
import Login from "./pages/marketing/Login";

import Dashboard from "./pages/app/Dashboard";
import Cards from "./pages/app/Cards";
import Coupons from "./pages/app/Coupons";
import TripPlannerApp from "./pages/app/TripPlannerApp";
import FamilyApp from "./pages/app/FamilyApp";
import Alerts from "./pages/app/Alerts";

export default function App() {
  return (
    <Routes>
      {/* Marketing site */}
      <Route element={<MarketingLayout />}>
        <Route index element={<Home />} />
        <Route path="features"     element={<Features />} />
        <Route path="trip-planner" element={<TripPlannerMarketing />} />
        <Route path="family"       element={<Family />} />
        <Route path="banks"        element={<Banks />} />
        <Route path="pricing"      element={<Pricing />} />
        <Route path="about"        element={<About />} />
        <Route path="login"        element={<Login />} />
      </Route>

      {/* In-app demo (post-fake-login) */}
      <Route path="app" element={<AppLayout />}>
        <Route index               element={<Dashboard />} />
        <Route path="cards"        element={<Cards />} />
        <Route path="coupons"      element={<Coupons />} />
        <Route path="trip-planner" element={<TripPlannerApp />} />
        <Route path="family"       element={<FamilyApp />} />
        <Route path="alerts"       element={<Alerts />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
