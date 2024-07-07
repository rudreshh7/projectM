import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
export default function Home() {
  return (
    <main>
      <div className="flex">
        {/* Side */}
        <Sidebar />
        {/* Main */}
        <div>
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </main>
  );
}
