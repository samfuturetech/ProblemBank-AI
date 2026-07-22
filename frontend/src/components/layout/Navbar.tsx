export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
      <h1 className="text-2xl font-bold text-blue-500">
        ProblemBank AI
      </h1>

      <div className="flex gap-4">
        <button className="text-white hover:text-blue-400">
          Login
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">
          Register
        </button>
      </div>
    </nav>
  );
}