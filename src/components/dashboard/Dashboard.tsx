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
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [searchTypeId, searchTerm],
    queryFn: async () => await querySearch(searchTerm, searchTypeId),
    select: querySelect,
    staleTime: STALETIME,
  });

  const homeworldUrls =
    data?.map(({ homeworld }: { homeworld: string }) => homeworld) || [];

  const speciesUrls =
    data?.map(({ species }: { species: string }) => species) || [];

  const homeworldResults = useQueries({
    queries: homeworldUrls.map((homeworld) => {
      return {
        queryKey: [homeworld],
        queryFn: async () => await queryField(homeworld),
        select: querySelectHomeworld,
      };
    }),
  });

  const speciesResults = useQueries({
    queries: speciesUrls.map((species) => {
      return {
        queryKey: [species],
        queryFn: async () => await queryField(species),
        select: querySelectSpecies,
      };
    }),
  });

  const homeworldData = homeworldResults.map((res) => res.data);
  const speciesData = speciesResults.map((res) => res.data);

  const getHomeworldName = (homeworld: string) => {
    for (let index = 0; index < homeworldData.length; index++) {
      if (homeworldData[index]?.url === homeworld) {
        return homeworldData[index]?.name || "";
      }
    }

    return "";
  };

  const getSpeciesName = (species: string) => {
    for (let index = 0; index < speciesData.length; index++) {
      if (speciesData[index]?.url === species) {
        return speciesData[index]?.name || "Human";
      }
    }

    return "Human";
  };

  if (isPending) {
    return <span>pending...</span>;
  }

  if (error) {
    return <span className="text-red-500">Error: {error.message}</span>;
  }

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
        />
      ))}

      {isFetching ? <span>Fetching...</span> : null}
    </div>
  );
};

export default Dashboard;
