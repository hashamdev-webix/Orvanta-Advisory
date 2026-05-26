import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Overview from "./dashboard/Overview";
import BookService from "./dashboard/BookService";
import MyBookings from "./dashboard/MyBookings";
import Invoices from "./dashboard/Invoices";
import Profile from "./dashboard/Profile";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/book" element={<BookService />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
