import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="flex flex-col items-center justify-center py-24 px-6">
        <h1 className="text-5xl font-bold text-center">
          Where Problems Become Products
        </h1>

        <p className="mt-6 text-slate-400 text-center max-w-2xl">
          Discover real-world problems, collaborate with developers,
          and build impactful solutions together.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Explore Problems
        </button>
      </main>
    </div>
  );
}