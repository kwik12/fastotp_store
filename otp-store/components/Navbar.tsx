export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="text-xl font-semibold">OTP Store</div>
      <div>
        <button className="mr-4">Dashboard</button>
        <button>Wallet</button>
      </div>
    </nav>
  );
}
