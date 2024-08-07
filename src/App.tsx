import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Search from "./components/search/Search";

function App() {
  return (
    <main className="m-4">
      <h1 className="text-2xl font-semibold">Swiftly challenge - Star Wars</h1>
      <Search />
      <Dashboard />
    </main>
  );
}

export default App;
