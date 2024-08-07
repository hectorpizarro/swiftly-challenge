import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Search from "./components/search/Search";
import { API_TYPE_NAMES } from "./constants";

type Foo = {
  searchTerm: string;
  searchTypeId: API_TYPE_NAMES;
};

function App() {
  const [searchData, setSearchData] = useState(() => {
    const initialValues: Foo = {
      searchTerm: "",
      searchTypeId: "name",
    };

    return initialValues;
  });

  const updateSearch = (searchTerm: string, searchTypeId: API_TYPE_NAMES) => {
    setSearchData({
      searchTerm,
      searchTypeId,
    });
  };

  return (
    <main className="m-4">
      <h1 className="text-2xl font-semibold">Swiftly challenge - Star Wars</h1>
      <Search updateSearch={updateSearch} />
      <Dashboard
        searchTerm={searchData.searchTerm}
        searchTypeId={searchData.searchTypeId}
      />
    </main>
  );
}

export default App;
