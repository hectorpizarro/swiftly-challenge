import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Search from "./components/search/Search";
import { API_TYPE_NAMES } from "./constants";

type InitialValues = {
  searchTerm: string;
  searchTypeId: API_TYPE_NAMES;
};

// Main component
function App() {
  // Search data is stored in state here. IT  is updated from Search and provided to Dashboard in order to make API calls.
  const [searchData, setSearchData] = useState(() => {
    const initialValues: InitialValues = {
      searchTerm: "",
      searchTypeId: "name",
    };

    return initialValues;
  });

  // Function used by Search to update state search values
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
