import Navbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <div className="p-8">
      <Navbar />
      <h2 className="text-2xl font-bold mt-4">Dashboard</h2>
      <p className="mt-2">Here you can buy virtual numbers and manage OTPs.</p>
    </div>
  );
}
