import Profile from "../profile/Profile";
import { useQueries, useQuery } from "@tanstack/react-query";
import { STALETIME } from "../../constants";
import { DashboardProps, PeopleResult } from "./types";
import {
  queryField,
  querySearch,
  querySelect,
  querySelectHomeworld,
  querySelectSpecies,
} from "./queries";

const Dashboard = ({ searchTerm, searchTypeId }: DashboardProps) => {
  // Main query
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [searchTypeId, searchTerm],
    queryFn: async () => await querySearch(searchTerm, searchTypeId),
    select: querySelect,
    staleTime: STALETIME,
    enabled: !!searchTerm,
  });

  // homeworld urls array
  const homeworldUrls =
    data?.map(({ homeworld }: { homeworld: string }) => homeworld) || [];

  // species urls array. The main search actually return an array of species, to simplify this demo we take only the first one if available
  const speciesUrls =
    data?.map(({ species }: { species: string }) => species) || [];

  // query to obtain all homeworlds for current cards
  const homeworldResults = useQueries({
    queries: homeworldUrls.map((homeworld) => {
      return {
        queryKey: [homeworld],
        queryFn: async () => await queryField(homeworld),
        select: querySelectHomeworld,
      };
    }),
  });

  // query to obtain species for all current cards
  const speciesResults = useQueries({
    queries: speciesUrls.map((species) => {
      return {
        queryKey: [species],
        queryFn: async () => await queryField(species),
        select: querySelectSpecies,
      };
    }),
  });

  // Array of {url, name} objects with homeworld information
  const homeworldData = homeworldResults.map((res) => res.data);

  // Array of {url, name} objects with species information
  const speciesData = speciesResults.map((res) => res.data);

  // Returns the homeworld name to render or empty string if not found
  const getHomeworldName = (homeworld: string) => {
    for (let index = 0; index < homeworldData.length; index++) {
      if (homeworldData[index]?.url === homeworld) {
        return homeworldData[index]?.name || "";
      }
    }

    return "";
  };

  // Returns the species name to render or empty if not found
  const getSpeciesName = (species: string) => {
    for (let index = 0; index < speciesData.length; index++) {
      if (speciesData[index]?.url === species) {
        return speciesData[index]?.name || searchTypeId === "name"
          ? "Human"
          : "";
      }
    }

    return searchTypeId === "name" ? "Human" : "";
  };

  // Show 'pending' message if a search query is in progress
  if (isPending) {
    return (
      <span>
        {searchTerm ? "pending..." : "Search in the Star Wars database!"}
      </span>
    );
  }

  if (error) {
    return <span className="text-red-500">Error: {error.message}</span>;
  }

  // No results, show message
  if (data.length === 0) {
    return <span>No results found.</span>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(({ name, homeworld, species }: PeopleResult) => (
        <Profile
          key={name}
          name={name}
          homeworld={getHomeworldName(homeworld)}
          species={getSpeciesName(species)}
          searchTypeId={searchTypeId}
        />
      ))}

      {isFetching ? <span>Fetching...</span> : null}
    </div>
  );
};

export default Dashboard;
