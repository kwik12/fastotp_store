import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="p-8">
      <Navbar />
      <h1 className="text-3xl font-bold mt-4">Welcome to OTP Store</h1>
      <p className="mt-2 text-lg">Buy virtual numbers for OTP verification.</p>
    </main>
  );
}
